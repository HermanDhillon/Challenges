function diamond(n){
  let diam = ''
  if(n%2===0 || n <=0){
    return null
  }
  for(let i=1; i <= n; i+=2){
    diam += " ".repeat(Math.floor((n-i)/2)) + '*'.repeat(i) + '\n'
  }
  for(let i=n-2; i >0 ; i-=2){
    diam += " ".repeat(Math.floor((n-i)/2)) + '*'.repeat(i) + '\n'
  }
 return diam
}