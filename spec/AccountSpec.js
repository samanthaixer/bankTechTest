describe("Account", function() {
  describe("Adding funds through a deposit", function(){
    beforeEach(function() {
      this.account = new Account();
    })

    it("Has an empty bank balance at the beginning", function(){
      expect(this.account.balance()).toEqual(0.00);
    });

    it("Adds the amount to the total of the transaction", function(){
      this.account.deposit(500.00);
      expect(this.account.balance()).toEqual(500.00);
    });

    it("Adds a transaction to the list", function(){
      this.account.deposit(200.00);
      expect(this.account.transactionList).toContain(jasmine.objectContaining({amount: 200.00}))
    })

    it("Takes a deposit for a date that isn't today", function(){
      let date = new Date(2019, 3, 21)
      this.account.deposit(500.00, date);
      expect(this.account.printStatement()).toContain("21/04/2019")
    })

    it("Prints the correct running total for multiple deposits", function(){
      this.account.deposit(500.00);
      this.account.deposit(200.00);
      expect(this.account.printStatement()).toContain("700.00")
    })
  });

  describe("Removing funds through a withdrawal", function(){
    beforeEach(function() {
      this.account = new Account();
      this.account.deposit(500.00);
    })

    it("Removes the amount from the total of the transaction", function(){
      this.account.withdraw(200.00);
      expect(this.account.balance()).toEqual(300.00);
    });

    it("Adds a transaction to the list", function(){
      this.account.withdraw(200.00);
      expect(this.account.transactionList).toContain(jasmine.objectContaining({amount: 200.00, type: "debit"}))
    })

    // it("Takes a deposit for a date that isn't today", function(){
    //   let date = new Date(2019, 3, 21)
    //   this.account.deposit(500.00, date);
    //   expect(this.account.printStatement()).toContain("21/04/2019")
    // })
    //
    // it("Prints the correct running total for multiple deposits", function(){
    //   this.account.deposit(500.00);
    //   this.account.deposit(200.00);
    //   expect(this.account.printStatement()).toContain("700.00")
    // })


  });
});
