var Transaction = require('../src/Transaction');

describe("Transaction", function() {
  describe("Creating a credit transaction", function(){

    beforeAll(function() {
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
    })

    it("Adds a transaction for 500.00", function(){
      let transaction = new Transaction(500.00, this.date, "credit");
      expect(transaction).toEqual(jasmine.objectContaining({date: this.date}))
    })

    it("Sets it to credit if positive", function(){
      let transaction = new Transaction(500.00, this.date, "credit");
      expect(transaction).toEqual(jasmine.objectContaining({type: "credit"}))
    })

    it("Sets it to debit if negative", function(){
      let transaction = new Transaction(500.00, this.date, "debit");
      expect(transaction).toEqual(jasmine.objectContaining({type: "debit"}))
    })

    it("Produces a readable string of the transaction", function() {
      let transaction = new Transaction(200.00, this.date, "credit");
      expect(transaction.print()).toEqual(`${this.formattedDate} || 200.00 || ||`)
    })

  })
});
