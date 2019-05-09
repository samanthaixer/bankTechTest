function TransactionFakeDeposit200(){ };

TransactionFakeDeposit200.prototype = {
  create: function(amount, date, type){
    this.date = date;
    this.amount = 200;
    this.type = "credit";
    return this;
  },

  print: function(){
      return `${this.formatDate(this.date)} || 200.00 || ||`
  },

  formatDate: function(date){
    return date.toLocaleDateString('en-GB');
  }
}

module.exports = TransactionFakeDeposit200;
