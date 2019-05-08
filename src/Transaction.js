
function Transaction(amount, date) {
 this.date = date;
 this.amount = amount;
 this.type = "";
 this.setType();
};

Transaction.prototype = {
  print: function(){
    if (this.type === "credit") {
      return `${this.formatDate(this.date)} || ${this.amount.toFixed(2)} || ||`
    } else {
      return `${this.formatDate(this.date)} || || ${this.amount.toFixed(2)}`
    }
  },

  setType: function(){
    if (this.amount >= 0) {
      this.type = "credit";
    } else {
      this.type = "debit";
    }
  },

  formatDate: function(date){
    return date.toLocaleDateString('en-GB');
  }

}
