String.prototype.isUpperCase = function() {
  return this.split("").filter(e => e.charCodeAt(0) > 96 && e.charCodeAt(0) <123).length ? false : true
}