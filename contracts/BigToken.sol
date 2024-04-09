// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BigToken {
  // Add a Constructor
  // Set the number of tokens
  // Read the total number of tokens
  // Initialize name, symbol & Standard
  // Add a transfer function

  string public name = "Big Token";
  string public symbol = "BIG";
  string public standard = "BigToken v1.0";
  uint256 public totalSupply;

  event Transfer (
    address indexed _from,
    address indexed _to,
    uint256 _value
  );

  mapping(address => uint256) public balanceOf;

  constructor (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }

  // Transfer
  function transfer(address _to, uint256 _value) public returns (bool success) {
    // Exception if the account don't have enough
    require(balanceOf[msg.sender] >= _value);

    // Transfer Balance
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
    
    // Transfer event   
    emit Transfer(msg.sender, _to, _value);

    // Returns a boolean
    return true;
  }
}
