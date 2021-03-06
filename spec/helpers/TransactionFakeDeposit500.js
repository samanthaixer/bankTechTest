
console.log("In helper file");

function TransactionFakeDeposit500(){ };

TransactionFakeDeposit500.prototype = {

  create: function(amount, date, type){
    this.date = date;
    this.amount = 500;
    this.type = "credit";
    return this;
  },

  print: function(){
      return `${this.formatDate(this.date)} || 500.00 || ||`
  },

  formatDate: function(date){
    return date.toLocaleDateString('en-GB');
  }
}

module.exports = TransactionFakeDeposit500;
