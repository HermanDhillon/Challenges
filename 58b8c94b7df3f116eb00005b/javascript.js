function reverseLetter(str) {

  return str.split("").filter(e=> e.charCodeAt(0) >96 && e.charCodeAt(0) < 123).reverse().join("")
  
  
}