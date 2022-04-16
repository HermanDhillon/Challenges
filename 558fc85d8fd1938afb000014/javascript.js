function sumTwoSmallestNumbers(n) {  
  n.sort((a, b) => a - b);
  return n[0] + n[1]
}