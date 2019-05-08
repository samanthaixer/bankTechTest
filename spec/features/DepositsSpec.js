describe("Account", function(){
  describe("Adding a new deposit transaction to my account", function(){
    beforeEach(function() {
      account = new Account();
      this.date = new Date();
      this.formattedDate = this.date.toLocaleDateString('en-GB');
    })

    it("creates a new transaction and adds to the balance", function(){
      account.deposit(500.00);

      expect(account.balance()).toEqual(500.00);
      let statement = account.printStatement();
      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
    });

    it("correctly updates the running total", function(){
      account.deposit(500.00);
      account.deposit(200.00);

      expect(account.balance()).toEqual(700.00);

      let statement = account.printStatement();

      expect(statement).toContain("date || credit || debit || balance")
      expect(statement).toContain(`${this.formattedDate} || 200.00 || || 700.00`)
      expect(statement).toContain(`${this.formattedDate} || 500.00 || || 500.00`)
    });
  });
});
