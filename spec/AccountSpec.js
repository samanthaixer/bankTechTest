var Account = require('../src/Account');
var TransactionFakeDeposit500 = require('./helpers/TransactionFakeDeposit500');
var TransactionFakeDeposit200 = require('./helpers/TransactionFakeDeposit200');
var TransactionFakeWithdraw200 = require('./helpers/TransactionFakeWithdraw200');
var TransactionFakeWithdraw100 = require('./helpers/TransactionFakeWithdraw100');


describe("Account", function() {
  describe("Adding funds through a deposit", function(){

    beforeEach(function() {
      this.account = new Account();
    })

    it("Has an empty bank balance at the beginning", function(){
      expect(this.account.balance()).toEqual(0.00);
    });

    it("Adds the amount to the total of the transaction", function(){
      this.account.deposit(500.00, new Date(), new TransactionFakeDeposit500());
      expect(this.account.balance()).toEqual(500.00);
    });

    it("Adds a transaction to the list", function(){
      this.account.deposit(200.00, new Date(), new TransactionFakeDeposit200());
      expect(this.account.transactionList).toContain(jasmine.objectContaining({amount: 200.00}))
    })

    it("Takes a deposit for a date that isn't today", function(){
      let date = new Date(2019, 3, 21)
      this.account.deposit(500.00, date, new TransactionFakeDeposit500());
      expect(this.account.printStatement()).toContain("21/04/2019")
    })

    it("Prints the correct running total for multiple deposits", function(){
      this.account.deposit(500.00, new Date(), new TransactionFakeDeposit500());
      this.account.deposit(200.00, new Date(), new TransactionFakeDeposit200());
      expect(this.account.printStatement()).toContain(` || 200.00 || || 700.00`)

    })
  });

  describe("Removing funds through a withdrawal", function(){
    beforeEach(function() {
      this.account = new Account();
      this.account.deposit(500.00, new Date(), new TransactionFakeDeposit500());
    })

    it("Removes the amount from the total of the transaction", function(){
      this.account.withdraw(200.00, new Date(), new TransactionFakeWithdraw200());
      expect(this.account.balance()).toEqual(300.00);
    });

    it("Adds a transaction to the list", function(){
      this.account.withdraw(200.00, new Date(), new TransactionFakeWithdraw200());
      expect(this.account.transactionList).toContain(jasmine.objectContaining({amount: 200.00, type: "debit"}))
    })

    it("Takes a deposit for a date that isn't today", function(){
      let date = new Date(2019, 3, 21)
      this.account.withdraw(200.00, date, new TransactionFakeWithdraw200());
      expect(this.account.printStatement()).toContain("21/04/2019")
    })

    it("Prints the correct running total for multiple deposits", function(){
      this.account.withdraw(100.00, new Date(), new TransactionFakeWithdraw100());
      this.account.withdraw(100.00, new Date(), new TransactionFakeWithdraw100());
      expect(this.account.printStatement()).toContain("300.00")
    })

  });
});
