var Transaction = require('./Transaction');

function Account() {
  const STARTING_BALANCE = 0.00;
  this.currentBalance = STARTING_BALANCE;
  this.transactionList = [];
}

Account.prototype = {

  deposit: function(amount, transactionDate = new Date()){
    this.currentBalance += amount;
    this.transactionList.push(new Transaction(amount, transactionDate, "credit"));
  },

  withdraw: function(amount, transactionDate = new Date()){
    this.currentBalance -= amount;
    this.transactionList.push(new Transaction(amount, transactionDate, "debit"))
  },

  balance: function() {
    return this.currentBalance;
  },

  printStatement: function() {

    var fullStatement = `date || credit || debit || balance\n`
    var statement = this.calculateTotals();
    return fullStatement += statement.reverse().join('\n');
  },

  calculateTotals: function(){
    let statementLines = []
    let runningTotal = 0;

    this.transactionList.forEach(function(transaction){
      if(transaction.type === "credit") runningTotal += transaction.amount;
      if(transaction.type === "debit") runningTotal -= transaction.amount;
      statementLines.push(`${transaction.print()} ${runningTotal.toFixed(2)}`)
    })

    return statementLines;
  }
};

module.exports = Account;
