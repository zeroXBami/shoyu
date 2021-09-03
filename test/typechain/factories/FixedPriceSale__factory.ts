/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedPriceSale,
  FixedPriceSaleInterface,
} from "../FixedPriceSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canClaim",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061026b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635f11a72b1461003b578063651199511461006a575b600080fd5b61005661004936600461012c565b6000979650505050505050565b604051901515815260200160405180910390f35b61005661007836600461012c565b6000808780602001905181019061008f9190610114565b9050600081116100dc5760405162461bcd60e51b815260206004820152601460248201527353484f59553a20494e56414c49445f505249434560601b604482015260640160405180910390fd5b8843111580156100eb57508086145b9998505050505050505050565b80356001600160a01b038116811461010f57600080fd5b919050565b600060208284031215610125578081fd5b5051919050565b600080600080600080600060e0888a031215610146578283fd5b87359650602088013567ffffffffffffffff80821115610164578485fd5b818a0191508a601f830112610177578485fd5b8135818111156101895761018961021f565b604051601f8201601f19908116603f011681019083821181831017156101b1576101b161021f565b816040528281528d60208487010111156101c9578788fd5b826020860160208301379182016020018790525097506101ee915050604089016100f8565b945060608801359350610203608089016100f8565b925060a0880135915060c0880135905092959891949750929550565b634e487b7160e01b600052604160045260246000fdfea264697066735822122039ef1de7b0601e5db41d19a16b90a3330fd0f1d21c0522fa937da3094826534964736f6c63430008030033";

export class FixedPriceSale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPriceSale> {
    return super.deploy(overrides || {}) as Promise<FixedPriceSale>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedPriceSale {
    return super.attach(address) as FixedPriceSale;
  }
  connect(signer: Signer): FixedPriceSale__factory {
    return super.connect(signer) as FixedPriceSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPriceSaleInterface {
    return new utils.Interface(_abi) as FixedPriceSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPriceSale {
    return new Contract(address, _abi, signerOrProvider) as FixedPriceSale;
  }
}
