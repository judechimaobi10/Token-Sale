var BigToken = artifacts.require("./BigToken.sol");


contract('BigToken', function(accounts) {

  it('sets the total supply upon depoyment', function() {
    return BigToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
      }).then(function(totalSupply) {
        assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000')
        });
    });
  })





  // function testInitialBalanceUsingDeployedContract() public {
  //   MetaCoin meta = MetaCoin(DeployedAddresses.MetaCoin());

  //   uint expected = 10000;

  //   Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  // }

  // function testInitialBalanceWithNewMetaCoin() public {
  //   MetaCoin meta = new MetaCoin();

  //   uint expected = 10000;

  //   Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  // }


