function TransactionFakeWithdraw100(){ };

TransactionFakeWithdraw100.prototype = {
  create: function(amount, date, type){
    this.date = date;
    this.amount = 100;
    this.type = "debit";
    return this;
  },

  print: function(){
      return `${this.formatDate(this.date)} || || 100.00 ||`
  },

  formatDate: function(date){
    return date.toLocaleDateString('en-GB');
  }
}

module.exports = TransactionFakeWithdraw100
