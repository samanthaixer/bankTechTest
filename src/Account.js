function Account() {
  STARTING_BALANCE = 0.00;
  this.currentBalance = STARTING_BALANCE;
}

Account.prototype = {

  deposit: function(amount) {
    this.currentBalance += amount;

  },

  balance: function() {
    return this.currentBalance;
  },

  printStatement: function() {
    let statement = `date || credit || debit || balance`
    statement += `${new Date()} || 500.00 || || 500.00`
    return statement;

  }
};
