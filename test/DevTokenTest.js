const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DevToken", function () {
  it("should deploy the contract and check the name", async function () {
    const DevToken = await ethers.getContractFactory("DevToken");
    const devToken = await DevToken.deploy("DevToken", "DVT", 1000000, 18, "0xFeeManagerAddress");
    await devToken.deployed();

    expect(await devToken.name()).to.equal("DevToken");
  });
});
