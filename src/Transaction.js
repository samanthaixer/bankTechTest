function Transaction() {

}

Transaction.prototype = {
  create: function(amount, date, type){
    this.date = date;
    this.amount = amount;
    this.type = type;
    return this;
  },

  print: function(){
    if (this.type === "credit") {
      return `${this.formatDate(this.date)} || ${this.amount.toFixed(2)} || ||`
    } else {
      return `${this.formatDate(this.date)} || || ${this.amount.toFixed(2)} ||`
    }
  },

  formatDate: function(date){
    return date.toLocaleDateString('en-GB');
  }

}

module.exports = Transaction;
