var Account = require('../../src/Account');

describe("Feature - Account Withdrawals", function(){
  describe("Withdrawing funds from my account", function(){
    beforeEach(function() {
      account = new Account();
    })

    it("Creates a new transaction and removes the amount from the balance", function(){
      // **Given** a client makes a deposit of 1000 on 10-01-2012
      account.deposit(1000.00, new Date(2012, 0, 10));
      // **And** a deposit of 2000 on 13-01-2012
      account.deposit(2000.00, new Date(2012, 0, 13));
      // **And** a withdrawal of 500 on 14-01-2012
      account.withdraw(500.00, new Date(2012, 0, 14))
      // **When** she prints her bank statement
      // Then** she would see

      let response = `date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00`
      expect(account.printStatement()).toEqual(response)
    });
  });
});
