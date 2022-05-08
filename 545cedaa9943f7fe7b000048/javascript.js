function isPangram(string){
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  for(let i=0; i <alpha.length; i++){
    if(!string.toLowerCase().includes(alpha[i])){
      return false
    }
  }
  return true
  
}