String.prototype.digit = function() {
  return this.length === 0 ? false : "0123456789".includes(this);
};