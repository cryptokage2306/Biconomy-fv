export const abi =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "relayerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "functionSignature",
          "type": "bytes"
        }
      ],
      "name": "MetaTransactionExecuted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "allSubdomain",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "subdomain",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "internalType": "struct FileverseRegistry.Subdomain[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balancesOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "functionSignature",
          "type": "bytes"
        },
        {
          "internalType": "bytes32",
          "name": "sigR",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "sigS",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "sigV",
          "type": "uint8"
        }
      ],
      "name": "executeMetaTransaction",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_metadataIPFSHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ownerViewDid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_ownerEditDid",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "ownedSubdomain",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "subdomain",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "internalType": "struct FileverseRegistry.Subdomain[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_subdomain",
          "type": "address"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_subdomain",
          "type": "address"
        }
      ],
      "name": "subdomainInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "subdomain",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "internalType": "struct FileverseRegistry.Subdomain",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];