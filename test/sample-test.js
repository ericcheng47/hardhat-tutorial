const { expect } = require("chai");
const { ethers } = require("hardhat");
const Crypt = artifacts.require('mocks/crypt.sol');

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("123Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

// describe("NFTMarket", function () {
//   it("Should create and execute market sales", async function () {
//     /* deploy the marketplace */
//     const Market = await ethers.getContractFactory("NFTMarket")
//     const market = await Market.deploy()
//     await market.deployed()
//     const marketAddress = market.address

//     /* deploy the NFT contract */
//     const NFT = await ethers.getContractFactory("NFT")
//     const nft = await NFT.deploy(marketAddress)
//     await nft.deployed()
//     const nftContractAddress = nft.address

//     let listingPrice = await market.getListingPrice()
//     listingPrice = listingPrice.toString()

//     const auctionPrice = ethers.utils.parseUnits('1', 'ether')

//     /* create two tokens */
//     await nft.createToken("https://www.mytokenlocation.com")
//     await nft.createToken("https://www.mytokenlocation2.com")

//     /* put both tokens for sale */
//     await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
//     await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })

//     const [_, buyerAddress] = await ethers.getSigners()

//     /* execute sale of token to another user */
//     await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice })

//     /* query for and return the unsold items */
//     items = await market.fetchMarketItems()
//     items = await Promise.all(items.map(async _item => {
//       const tokenUri = await nft.tokenURI(_item.tokenId)
//       let item = {
//         price: _item.price.toString(),
//         tokenId: _item.tokenId.toString(),
//         seller: _item.seller,
//         owner: _item.owner,
//         tokenUri
//       }
//       return item
//     }))
//     console.log('items: ', items)
//   })
// })


function checkBalance(actualVal, expectedVal) {
  if (actualVal >= expectedVal) {
      if (actualVal - expectedVal > approximateValue)
          return false;
      return true;
  } else {
      if (expectedVal - actualVal > approximateValue)
          return false;
      return true;
  }
}

function increaseTime(addSeconds) {
  const id = Date.now();

  return new Promise((resolve, reject) => {
      web3.currentProvider.send({
          jsonrpc: '2.0',
          method: 'evm_increaseTime',
          params: [addSeconds],
          id,
      }, (err1) => {
          if (err1) return reject(err1);

          web3.currentProvider.send({
          jsonrpc: '2.0',
          method: 'evm_mine',
          id: id + 1,
          }, (err2, res) => (err2 ? reject(err2) : resolve(res)));
      });
  });
}

describe("PoolOne", function () {
  const [buyerAddress] = await ethers.getSigners();

  console.log(buyerAddress)

  // const [trader1, trader2, trader3, trader4] = [accounts[1],accounts[2],accounts[3],accounts[4]];

  // beforeEach(async() => {
  //     crypt = await Crypt.new();
  //     gRoy = await Crypt.new();
  //     pool = await PoolOne.new(crypt.address, gRoy.address ,5000,4,30)

  //     const amount = web3.utils.toWei('1000');
  //     const poolAmount = web3.utils.toWei('5000');
  //     const seedTokenBalance = async (token, address) => {
  //         await token.faucet(address, amount);
  //         await token.approve(
  //             pool.address,
  //             amount,
  //             {from: address}
  //         );
  //     };

  //     await Promise.all(
  //         [trader1, trader2, trader3, trader4].map(
  //             address => seedTokenBalance(crypt, address)
  //         ),
  //         crypt.faucet(pool.address, poolAmount),
  //         gRoy.faucet(pool.address, poolAmount)
  //     );
  // });
  
  it("Test 1: should deposit and withdraw tokens", async function () {
    
    
  });
});