describe("Account", function(){
  describe("Adding a new deposit transaction to my account", function(){
    beforeEach(function() {
      account = new Account();
    })

    it("creates a new transaction and adds to the balance", function(){
      account.deposit(500.00);

      expect(account.balance()).toEqual(500.00);
      let statement = account.printStatement();
      let date = new Date();
      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${date} || 500.00 || || 500.00`)
    });
  });
});
