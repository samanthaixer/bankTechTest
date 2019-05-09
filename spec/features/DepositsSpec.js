var Account = require('../../src/Account');

describe("Feature - Account Deposits", function(){
  describe("Adding a new deposit transaction to my account", function(){

    beforeEach(function() {
      this.account = new Account();
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
    })

    it("Creates a new transaction and adds to the balance", function(){
      this.account.deposit(500.00);

      expect(this.account.balance()).toEqual(500.00);
      let statement = this.account.printStatement();
      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
    });

    it("Correctly updates the running total for multiple deposits", function(){
      this.account.deposit(500.00);
      this.account.deposit(200.00);

      expect(this.account.balance()).toEqual(700.00);

      let statement = this.account.printStatement();

      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 200.00 || || 700.00`)
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
    });
  });
});
