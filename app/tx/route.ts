export async function GET(req: Request)  {
    const data = {
      chainId: "eip155:8453",
      method: "eth_sendTransaction",
      params: {
        abi: [
          {
            stateMutability: "payable",
            type: "function",
            inputs: [
              {
                name: "numTokens",
                internalType: "uint256",
                type: "uint256",
              },
            ],
            name: "mint",
            outputs: [],
          },
          {
            stateMutability: "payable",
            type: "function",
            inputs: [
              {
                name: "numTokens",
                internalType: "uint256",
                type: "uint256",
              },
              {
                name: "referralCode",
                internalType: "uint256",
                type: "uint256",
              },
              {
                name: "referrer",
                internalType: "address",
                type: "address",
              },
            ],
            name: "mintWithReferral",
            outputs: [],
          },
        ],
        to: "0x9a860eeb3aa1fd685e698adda03fc0ee7792e6b2",
        data:
          "0xa0712d6800000000000000000000000000000000000000000000000000038d7ea4c12100",
        value: "999999999648000",
      },
    };
  
    return Response.json({ data })
  }
  