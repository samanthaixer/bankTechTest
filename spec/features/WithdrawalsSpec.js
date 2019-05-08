describe("Feature - Account Withdrawals", function(){
  describe("Withdrawing funds from my account", function(){
    beforeEach(function() {
      account = new Account();
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
    })

    it("Creates a new transaction and removes the amount from the balance", function(){
      account.deposit(500.00);
      account.withdraw(200.00)

      expect(account.balance()).toEqual(300.00);
      let statement = account.printStatement();
      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
      expect(statement).toContain(`${this.formattedDate} || || 200.00 || 300.00`)
    });
  });
});
