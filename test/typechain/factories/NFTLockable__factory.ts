/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTLockable, NFTLockableInterface } from "../NFTLockable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "locked",
        type: "bool",
      },
    ],
    name: "SetLocked",
    type: "event",
  },
  {
    inputs: [],
    name: "locked",
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
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_locked",
        type: "bool",
      },
    ],
    name: "setLocked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103d8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063211e28b61461005c578063715018a6146100715780638da5cb5b14610079578063cf309012146100ae578063f2fde38b146100d2575b600080fd5b61006f61006a366004610358565b6100e5565b005b61006f6101ba565b6100916000546201000090046001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546100c290600160b81b900460ff1681565b60405190151581526020016100a5565b61006f6100e036600461032a565b61023b565b6000546201000090046001600160a01b0316331461011e5760405162461bcd60e51b815260040161011590610378565b60405180910390fd5b801561016257600054600160b01b900460ff161561014e5760405162461bcd60e51b815260040161011590610378565b6000805460ff60b01b1916600160b01b1790555b60008054821515600160b81b0260ff60b81b199091161790556040517f9514871d395e6e24ef28f340cbcdcaa89f790cdf4a4fa6c25cf83a81fb27a86d906101af90831515815260200190565b60405180910390a150565b6000546201000090046001600160a01b031633146101ea5760405162461bcd60e51b815260040161011590610378565b60008054604051620100009091046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805462010000600160b01b0319169055565b6000546201000090046001600160a01b0316331461026b5760405162461bcd60e51b815260040161011590610378565b6001600160a01b0381166102c15760405162461bcd60e51b815260206004820152601860248201527f53484f59553a20494e56414c49445f4e45575f4f574e455200000000000000006044820152606401610115565b600080546040516001600160a01b03808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b03909216620100000262010000600160b01b0319909216919091179055565b60006020828403121561033b578081fd5b81356001600160a01b0381168114610351578182fd5b9392505050565b600060208284031215610369578081fd5b81358015158114610351578182fd5b60208082526010908201526f29a427acaa9d102327a92124a22222a760811b60408201526060019056fea2646970667358221220fa5b966700f2d9fa67aa77f2fc9babc9ee72079d902f078fdf8efe160811f07264736f6c63430008030033";

export class NFTLockable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTLockable> {
    return super.deploy(overrides || {}) as Promise<NFTLockable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTLockable {
    return super.attach(address) as NFTLockable;
  }
  connect(signer: Signer): NFTLockable__factory {
    return super.connect(signer) as NFTLockable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTLockableInterface {
    return new utils.Interface(_abi) as NFTLockableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTLockable {
    return new Contract(address, _abi, signerOrProvider) as NFTLockable;
  }
}
