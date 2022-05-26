function replace(s){
  let v = "aeiouAEIOU"
  return [...s].map(e => v.includes(e) ? "!" : e ).join("")
  
  
}