function toWeirdCase(string){
  return string.split(' ').map(e=> e.split("").map((c,i)=> i%2 ? c.toLowerCase() : c.toUpperCase() ).join("")).join(" ")
  }