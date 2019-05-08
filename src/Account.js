function Account() {
  STARTING_BALANCE = 0.00;
  this.currentBalance = STARTING_BALANCE;
  this.transactionList = [];
}

Account.prototype = {

  deposit: function(amount, transactionDate = new Date()){
    this.currentBalance += amount;
    this.transactionList.push(new Transaction(amount, transactionDate));
  },

  balance: function() {
    return this.currentBalance;
  },

  printStatement: function() {
    let statement = `date || credit || debit || balance\n`
    let runningTotal = STARTING_BALANCE;

    this.transactionList.forEach(function(transaction){
      runningTotal += transaction.amount;
      statement += `${transaction.print()} ${runningTotal.toFixed(2)} \n`

    })
    return statement;
  },
};
