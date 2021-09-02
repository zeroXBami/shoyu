const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts();
    const { deploy, execute } = deployments;

    const result = await deploy("NFT1155V0", {
        from: deployer,
        args: [],
        log: true,
    });
    if (result.newlyDeployed) {
        await execute("NFT1155V0", { from: deployer, log: true }, "initialize(address)", ethers.constants.AddressZero);
    }
};