import { RelayProvider } from "@opengsn/provider";
import { useEthers } from "@usedapp/core";
import { useEffect, useRef } from "react";
import { Biconomy } from "@biconomy/mexa";


export const useGsn = () => {
  const { library, active } = useEthers();
  const relayProvider = useRef<Biconomy>()

  useEffect(() => {
    const connectBiconomy = async () => {
      if (!window.ethereum) return;
      try {
        if(!library) return;
        const biconomy = new Biconomy(library.provider, {
          apiKey: "7906bc8d-5f27-4f5f-8cd6-da77f7ab7bac	",
          debug: true,
          contractAddresses: ["0xd0c9e73fb41b620c666cf55912713daf70a609c6"],
        });
        await biconomy.init();
        relayProvider.current= biconomy;
      } catch(err) {
        console.log(err);
      }
      
    };
    if (!active) {
      return;
    }
    connectBiconomy();
  }, [active, library]);
  return {
    biconomy: relayProvider.current,
  };
};
