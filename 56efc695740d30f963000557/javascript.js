String.prototype.toAlternatingCase = function () {
  return  this.split('').map(e=> e.charCodeAt(0)<91 ? e.toLowerCase() : e.toUpperCase() ).join('')
}