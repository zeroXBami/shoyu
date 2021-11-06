/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Mock, ERC721MockInterface } from "../ERC721Mock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMintBatch0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeMintBatch1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060048152602001634d6f636b60e01b815250604051806040016040528060048152602001634d4f434b60e01b81525081600090805190602001906200006492919062000083565b5080516200007a90600190602084019062000083565b50505062000166565b828054620000919062000129565b90600052602060002090601f016020900481019282620000b5576000855562000100565b82601f10620000d057805160ff191683800117855562000100565b8280016001018555821562000100579182015b8281111562000100578251825591602001919060010190620000e3565b506200010e92915062000112565b5090565b5b808211156200010e576000815560010162000113565b600181811c908216806200013e57607f821691505b602082108114156200016057634e487b7160e01b600052602260045260246000fd5b50919050565b6116c180620001766000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a8d337e911610066578063a8d337e91461021d578063b88d4fde14610230578063c87b56dd14610243578063e985e9c51461025657610100565b806370a08231146101ce5780638832e6e3146101ef57806395d89b4114610202578063a22cb4651461020a57610100565b806313d75cee116100d357806313d75cee1461018257806323b872dd1461019557806342842e0e146101a85780636352211e146101bb57610100565b806301ffc9a71461010557806306fdde031461012d578063081812fc14610142578063095ea7b31461016d575b600080fd5b6101186101133660046113b9565b610292565b60405190151581526020015b60405180910390f35b6101356102e6565b60405161012491906114a1565b6101556101503660046113f1565b610378565b6040516001600160a01b039091168152602001610124565b61018061017b3660046112ab565b610412565b005b610180610190366004611329565b610528565b6101806101a3366004611165565b6105be565b6101806101b6366004611165565b6105ef565b6101556101c93660046113f1565b61060a565b6101e16101dc366004611119565b610681565b604051908152602001610124565b6101806101fd3660046112d4565b610708565b610135610713565b610180610218366004611271565b610722565b61018061022b366004611206565b6107f4565b61018061023e3660046111a0565b61083c565b6101356102513660046113f1565b610874565b610118610264366004611133565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806102c357506001600160e01b03198216635b5e139f60e01b145b806102de57506301ffc9a760e01b6001600160e01b03198316145b90505b919050565b6060600080546102f5906115c6565b80601f0160208091040260200160405190810160405280929190818152602001828054610321906115c6565b801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103f65760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061041d8261060a565b9050806001600160a01b0316836001600160a01b0316141561048b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103ed565b336001600160a01b03821614806104a757506104a78133610264565b6105195760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103ed565b610523838361095c565b505050565b83821461053457600080fd5b60005b848110156105b6576105a486868381811061056257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105779190611119565b85858481811061059757634e487b7160e01b600052603260045260246000fd5b90506020020135846109ca565b806105ae81611601565b915050610537565b505050505050565b6105c833826109fd565b6105e45760405162461bcd60e51b81526004016103ed90611506565b610523838383610af4565b6105238383836040518060200160405280600081525061083c565b6000818152600260205260408120546001600160a01b0316806102de5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103ed565b60006001600160a01b0382166106ec5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103ed565b506001600160a01b031660009081526003602052604090205490565b6105238383836109ca565b6060600180546102f5906115c6565b6001600160a01b03821633141561077b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103ed565b3360008181526005602090815260408083206001600160a01b0387168085529252909120805460ff1916841515179055906001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516107e8911515815260200190565b60405180910390a35050565b60005b82811015610835576108238585858481811061059757634e487b7160e01b600052603260045260246000fd5b8061082d81611601565b9150506107f7565b5050505050565b61084633836109fd565b6108625760405162461bcd60e51b81526004016103ed90611506565b61086e84848484610c94565b50505050565b6000818152600260205260409020546060906001600160a01b03166108f35760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103ed565b600061090a60408051602081019091526000815290565b9050600081511161092a5760405180602001604052806000815250610955565b8061093484610cc7565b604051602001610945929190611435565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109918261060a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6109d48383610de2565b6109e16000848484610f24565b6105235760405162461bcd60e51b81526004016103ed906114b4565b6000818152600260205260408120546001600160a01b0316610a765760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103ed565b6000610a818361060a565b9050806001600160a01b0316846001600160a01b03161480610abc5750836001600160a01b0316610ab184610378565b6001600160a01b0316145b80610aec57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610b078261060a565b6001600160a01b031614610b6f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016103ed565b6001600160a01b038216610bd15760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103ed565b610bdc60008261095c565b6001600160a01b0383166000908152600360205260408120805460019290610c05908490611583565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c33908490611557565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610c9f848484610af4565b610cab84848484610f24565b61086e5760405162461bcd60e51b81526004016103ed906114b4565b606081610cec57506040805180820190915260018152600360fc1b60208201526102e1565b8160005b8115610d165780610d0081611601565b9150610d0f9050600a8361156f565b9150610cf0565b60008167ffffffffffffffff811115610d3f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610d69576020820181803683370190505b5090505b8415610aec57610d7e600183611583565b9150610d8b600a8661161c565b610d96906030611557565b60f81b818381518110610db957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610ddb600a8661156f565b9450610d6d565b6001600160a01b038216610e385760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103ed565b6000818152600260205260409020546001600160a01b031615610e9d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103ed565b6001600160a01b0382166000908152600360205260408120805460019290610ec6908490611557565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561102657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f68903390899088908890600401611464565b602060405180830381600087803b158015610f8257600080fd5b505af1925050508015610fb2575060408051601f3d908101601f19168201909252610faf918101906113d5565b60015b61100c573d808015610fe0576040519150601f19603f3d011682016040523d82523d6000602084013e610fe5565b606091505b5080516110045760405162461bcd60e51b81526004016103ed906114b4565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610aec565b506001949350505050565b80356001600160a01b03811681146102e157600080fd5b60008083601f840112611059578081fd5b50813567ffffffffffffffff811115611070578182fd5b6020830191508360208260051b850101111561108b57600080fd5b9250929050565b600082601f8301126110a2578081fd5b813567ffffffffffffffff808211156110bd576110bd61165c565b604051601f8301601f19908116603f011681019082821181831017156110e5576110e561165c565b816040528381528660208588010111156110fd578485fd5b8360208701602083013792830160200193909352509392505050565b60006020828403121561112a578081fd5b61095582611031565b60008060408385031215611145578081fd5b61114e83611031565b915061115c60208401611031565b90509250929050565b600080600060608486031215611179578081fd5b61118284611031565b925061119060208501611031565b9150604084013590509250925092565b600080600080608085870312156111b5578081fd5b6111be85611031565b93506111cc60208601611031565b925060408501359150606085013567ffffffffffffffff8111156111ee578182fd5b6111fa87828801611092565b91505092959194509250565b6000806000806060858703121561121b578384fd5b61122485611031565b9350602085013567ffffffffffffffff80821115611240578485fd5b61124c88838901611048565b90955093506040870135915080821115611264578283fd5b506111fa87828801611092565b60008060408385031215611283578182fd5b61128c83611031565b9150602083013580151581146112a0578182fd5b809150509250929050565b600080604083850312156112bd578182fd5b6112c683611031565b946020939093013593505050565b6000806000606084860312156112e8578283fd5b6112f184611031565b925060208401359150604084013567ffffffffffffffff811115611313578182fd5b61131f86828701611092565b9150509250925092565b600080600080600060608688031215611340578081fd5b853567ffffffffffffffff80821115611357578283fd5b61136389838a01611048565b9097509550602088013591508082111561137b578283fd5b61138789838a01611048565b9095509350604088013591508082111561139f578283fd5b506113ac88828901611092565b9150509295509295909350565b6000602082840312156113ca578081fd5b813561095581611672565b6000602082840312156113e6578081fd5b815161095581611672565b600060208284031215611402578081fd5b5035919050565b6000815180845261142181602086016020860161159a565b601f01601f19169290920160200192915050565b6000835161144781846020880161159a565b83519083019061145b81836020880161159a565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061149790830184611409565b9695505050505050565b6000602082526109556020830184611409565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000821982111561156a5761156a611630565b500190565b60008261157e5761157e611646565b500490565b60008282101561159557611595611630565b500390565b60005b838110156115b557818101518382015260200161159d565b8381111561086e5750506000910152565b600181811c908216806115da57607f821691505b602082108114156115fb57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561161557611615611630565b5060010190565b60008261162b5761162b611646565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461168857600080fd5b5056fea2646970667358221220c6a5288fc377b4a1be598a48ffa0394cd8ac48b0fcab0d9ce5b3c59934147d9564736f6c63430008030033";

export class ERC721Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(overrides || {}) as Promise<ERC721Mock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}
