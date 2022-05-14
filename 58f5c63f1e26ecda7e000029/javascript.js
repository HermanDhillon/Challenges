function wave(str){
  
  return  str.split("").map( (e,i) => str[i] !== " " ? str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1) : null).filter(e=> e!==null)
  
}