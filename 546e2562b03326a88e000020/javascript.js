function squareDigits(num){
  return +(num.toString().split('').map(element=> (+element)**2).join(''));
}