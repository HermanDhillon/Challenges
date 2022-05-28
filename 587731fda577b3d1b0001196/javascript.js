String.prototype.camelCase=function(){
  
return this.length === 0 ? "" : this.trim().split(" ").map(e=> e[0].toUpperCase() + e.slice(1)).join("") 
}