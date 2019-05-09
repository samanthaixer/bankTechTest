var Account = require('../../src/Account');

describe("Feature - Account Withdrawals", function(){
  describe("Withdrawing funds from my account", function(){
    beforeEach(function() {
      this.account = new Account();
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
    })

    it("Creates a new transaction and removes the amount from the balance", function(){
      this.account.deposit(500.00);
      this.account.withdraw(200.00);

      expect(this.account.balance()).toEqual(300.00);
      let statement = this.account.printStatement();
      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
      expect(statement).toContain(`${this.formattedDate} || || 200.00 || 300.00`)
    });
  });
});
