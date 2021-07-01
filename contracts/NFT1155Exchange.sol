// SPDX-License-Identifier: MIT

pragma solidity =0.8.3;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import "./interfaces/INFTExchange.sol";
import "./base/BaseNFTExchange.sol";

contract NFT1155Exchange is BaseNFTExchange, INFTExchange {
    bytes32 internal immutable _DOMAIN_SEPARATOR;
    address internal immutable _factory;

    mapping(address => address) public override royaltyFeeRecipientOf;
    mapping(address => uint8) public override royaltyFeeOf; // out of 1000
    mapping(address => uint8) public override charityDenominatorOf;

    constructor(address __factory) {
        _factory = __factory;

        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        _DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
                keccak256("NFT1155Exchange"),
                keccak256(bytes("1")),
                chainId,
                address(this)
            )
        );
    }

    function DOMAIN_SEPARATOR() public view override(BaseNFTExchange, IBaseNFTExchange) returns (bytes32) {
        return _DOMAIN_SEPARATOR;
    }

    function factory() public view override(BaseNFTExchange, IBaseNFTExchange) returns (address) {
        return _factory;
    }

    function _transfer(
        address nft,
        address from,
        address to,
        uint256 tokenId,
        uint256 amount
    ) internal override {
        IERC1155(nft).safeTransferFrom(from, to, tokenId, amount, "");
    }

    function submitOrder(
        address nft,
        uint256 tokenId,
        uint256 amount,
        address strategy,
        address currency,
        uint256 deadline,
        bytes memory params
    ) external override {
        bytes32 hash = _submitOrder(nft, tokenId, amount, strategy, currency, deadline, params);

        emit SubmitOrder(hash);
    }

    function _royaltyFeeRecipientOf(address nft) internal view override returns (address) {
        return royaltyFeeRecipientOf[nft];
    }

    function _royaltyFeeOf(address nft) internal view override returns (uint8) {
        return royaltyFeeOf[nft];
    }

    function _charityDenominatorOf(address nft) internal view override returns (uint8) {
        return charityDenominatorOf[nft];
    }

    function setRoyaltyFeeRecipientOf(address nft, address _royaltyFeeRecipient) public override {
        require(_royaltyFeeRecipient != address(0), "SHOYU: INVALID_FEE_RECIPIENT");

        royaltyFeeRecipientOf[nft] = _royaltyFeeRecipient;
    }

    function setRoyaltyFeeOf(address nft, uint8 _royaltyFee) public override {
        require(_royaltyFee <= INFTFactory(_factory).MAX_ROYALTY_FEE(), "SHOYU: INVALID_FEE");

        royaltyFeeOf[nft] = _royaltyFee;
    }

    function setCharityDenominatorOf(address nft, uint8 _charityDenominator) public override {
        charityDenominatorOf[nft] = _charityDenominator;
    }
}
