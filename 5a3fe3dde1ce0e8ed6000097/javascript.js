function century(year) {
  if(year <= 100){
    return 1
  }
  let numOfDigits = year.toString().length
//   let div = "1" + "0".repeat(numOfDigits -(Math.floor(numOfDigits/2)))
   let div = +("1" + "0".repeat(numOfDigits-2))
  return year%div !== 0 ? 1 + +year.toString().slice(0, numOfDigits-2) : +year.toString().slice(0, numOfDigits-2) 
}
// /2 +1 