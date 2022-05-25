function largestPairSum (numbers) {
  let x = numbers.sort((a,b)=>a-b)
  return x.pop() + x.pop()
}