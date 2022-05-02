function factorial(n)
{
  let fact=1
  if(n<0 || n>12){
    throw "ValueError"
  }
  for(let i=n; i>0; i--){
    fact *= i
  }
  return fact
}