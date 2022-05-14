function countBy(x, n) {
  let z = new Array(n).fill(1);
  
  return z.map((e,i)=> x*(i+1));
}