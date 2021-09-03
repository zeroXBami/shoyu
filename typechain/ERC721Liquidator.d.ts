/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC721LiquidatorInterface extends ethers.utils.Interface {
  functions: {
    "factory()": FunctionFragment;
    "liquidate(address,uint256,uint8)": FunctionFragment;
    "orderBook()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "orderBook", values?: undefined): string;

  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderBook", data: BytesLike): Result;

  events: {
    "Liquidate(address,address,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
}

export class ERC721Liquidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC721LiquidatorInterface;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    liquidate(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidate(address,uint256,uint8)"(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    orderBook(overrides?: CallOverrides): Promise<[string]>;

    "orderBook()"(overrides?: CallOverrides): Promise<[string]>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  liquidate(
    nft: string,
    tokenId: BigNumberish,
    minimumQuorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidate(address,uint256,uint8)"(
    nft: string,
    tokenId: BigNumberish,
    minimumQuorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  orderBook(overrides?: CallOverrides): Promise<string>;

  "orderBook()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    liquidate(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "liquidate(address,uint256,uint8)"(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    orderBook(overrides?: CallOverrides): Promise<string>;

    "orderBook()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Liquidate(
      proxy: string | null,
      nft: string | null,
      tokenId: BigNumberish | null,
      minimumQuorum: null
    ): EventFilter;
  };

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    liquidate(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidate(address,uint256,uint8)"(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    orderBook(overrides?: CallOverrides): Promise<BigNumber>;

    "orderBook()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidate(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidate(address,uint256,uint8)"(
      nft: string,
      tokenId: BigNumberish,
      minimumQuorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    orderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "orderBook()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
