var Transaction = require('../src/Transaction');

describe("Transaction", function() {
  describe("Creating a credit transaction", function(){

    beforeAll(function() {
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
      this.transaction = new Transaction();
    })

    it("Adds a transaction for 500.00", function(){
      this.transaction.create(500.00, this.date, "credit")
      expect(this.transaction).toEqual(jasmine.objectContaining({date: this.date}))
    })

    it("Sets it to credit if positive", function(){
      this.transaction.create(500.00, this.date, "credit")
      expect(this.transaction).toEqual(jasmine.objectContaining({type: "credit"}))
    })

    it("Sets it to debit if negative", function(){
      this.transaction.create(500.00, this.date, "debit")
      expect(this.transaction).toEqual(jasmine.objectContaining({type: "debit"}))
    })

    it("Produces a readable string of the transaction", function() {
      this.transaction.create(200.00, this.date, "credit")
      expect(this.transaction.print()).toEqual(`${this.formattedDate} || 200.00 || ||`)
    })

  })
});
