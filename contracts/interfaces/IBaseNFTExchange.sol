// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0;

import "../libraries/Orders.sol";

interface IBaseNFTExchange {
    event Cancel(bytes32 indexed hash);
    event Execute(bytes32 indexed hash, address executor, uint256 bidAmount, uint256 bidPrice, address bidReferrer);
    event Bid(bytes32 indexed hash, address bidder, uint256 bidAmount, uint256 bidPrice, address bidReferrer);
    event Claim(bytes32 indexed hash, address claimer);

    function DOMAIN_SEPARATOR() external view returns (bytes32);

    function factory() external view returns (address);

    function royaltyFeeInfo() external view returns (address recipient, uint8 permil);

    function canTrade(address nft) external view returns (bool);

    function bestBid(bytes32 hash)
        external
        view
        returns (
            address bidder,
            uint256 amount,
            uint256 price,
            address referrer
        );

    function isCancelled(bytes32 hash) external view returns (bool);

    function amountFilled(bytes32 hash) external view returns (uint256);

    function cancel(Orders.Ask memory order) external;

    function bid(Orders.Ask memory askOrder, Orders.Bid memory bidOrder) external returns (bool executed);

    function bid(
        Orders.Ask memory askOrder,
        uint256 bidAmount,
        uint256 bidPrice,
        address bidReferrer
    ) external returns (bool executed);

    function claim(Orders.Ask memory order) external;
}
