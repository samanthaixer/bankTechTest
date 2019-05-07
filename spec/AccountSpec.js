describe("Account", function() {
  describe("Adding funds through a deposit", function(){
    beforeEach(function() {
      account = new Account();
    })

    it("Should have an empty bank balance at the beginning", function(){
      expect(account.balance()).toEqual(0.00);
    });

    it("Should add the amount to the total of the transaction", function(){
      account.deposit(500.00);
      expect(account.balance()).toEqual(500.00);
    });

  });
});
