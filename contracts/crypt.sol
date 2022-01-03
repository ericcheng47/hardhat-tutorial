// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
// import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';

contract crypt is ERC20 {
  constructor() ERC20('CRYPT', 'CTEMP') public {}

  function faucet(address to, uint amount) external {
    _mint(to, amount);
  }
}
