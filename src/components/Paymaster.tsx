import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useGsn } from "../hook/useGsn";
import { abi } from "./abi";

export const getSignatureParametersEthers = (signature: any) => {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  const r = signature.slice(0, 66);
  const s = "0x".concat(signature.slice(66, 130));
  let v = "0x".concat(signature.slice(130, 132));
  v = ethers.BigNumber.from(v).toString();
  if (![27, 28].includes(Number(v))) v += 27;
  return {
    r: r,
    s: s,
    v: Number(v),
  };
};

const domainType = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "verifyingContract", type: "address" },
  { name: "salt", type: "bytes32" },
];
const metaTransactionType = [
  { name: "nonce", type: "uint256" },
  { name: "from", type: "address" },
  { name: "functionSignature", type: "bytes" },
];
let domainData = {
  name: "FileverseRegistry",
  version: "1",
  verifyingContract: "0xd0c9e73fb41b620c666cf55912713daf70a609c6",
  salt: "0x" + (42).toString(16).padStart(64, "0"),
};

export const Paymaster = () => {
  const { library } = useEthers();
  const { biconomy } = useGsn();
  console.log(biconomy);
  const callFunction = async () => {
    try {
      const signer = library?.getSigner();
      const signerAddress = await signer?.getAddress();
      const contractInstance = new ethers.Contract(
        "0xd0c9e73fb41b620c666cf55912713daf70a609c6",
        abi,
        signer
      );
      let nonce = 1;
      const contractInterface = new ethers.utils.Interface(abi);
      let functionSignature = contractInterface.encodeFunctionData("mint", [
        "0x7E8B2737559dEbd1480dD6BD140E757E46fc9540",
        "0x7E8B2737559dEbd1480dD6BD140E757E46fc9540",
        "0x7E8B2737559dEbd1480dD6BD140E757E46fc9540",
      ]);
      console.log({functionSignature})
      let message = {
        nonce: nonce,
        from: signerAddress,
        functionSignature: functionSignature,
      };
      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });
      console.log("adasdasdsadadasd")
      console.log()
      const signature = await library?.send("eth_signTypedData_v4", [
        signerAddress,
        dataToSign,
      ])
      console.log(signature)
      let { r, s, v } = getSignatureParametersEthers(signature);
      let { data } =
        await contractInstance.populateTransaction.executeMetaTransaction(
          signerAddress,
          functionSignature,
          r,
          s,
          v
        );
      console.log(data);
      let txParams = {
        data: data,
        to: "0xd0c9e73fb41b620c666cf55912713daf70a609c6",
        from: signerAddress,
        signatureType: "EIP712_SIGN",
      };
      if(biconomy?.provider) {
        const tx = await library?.send("eth_sendTransaction", [txParams]);
        console.log(tx);
      }
    } catch (err) {
      console.log(err)
    }
  };
  return <div>

    <button style={{
      color: "white"
    }} onClick={callFunction}>
      Submit
    </button>
  </div>;
};
