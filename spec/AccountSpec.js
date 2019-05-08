describe("Account", function() {
  describe("Adding funds through a deposit", function(){
    beforeEach(function() {
      this.account = new Account();
    })

    it("Should have an empty bank balance at the beginning", function(){
      expect(this.account.balance()).toEqual(0.00);
    });

    it("Should add the amount to the total of the transaction", function(){
      this.account.deposit(500.00);
      expect(this.account.balance()).toEqual(500.00);
    });

    it("Adds a transaction to the list", function(){
      this.account.deposit(200.00);
      expect(this.account.transactionList).toContain(jasmine.objectContaining({amount: 200.00}))
    })

    it("Should take deposits for various dates", function(){
      let date = new Date(2019, 3, 21)
      this.account.deposit(500.00, date);
      expect(this.account.printStatement()).toContain("21/04/2019")
    })

    it("Prints the correct running total", function(){
      this.account.deposit(500.00);
      this.account.deposit(200.00);
      expect(this.account.printStatement()).toContain("700.00")
    })


  });
});
