function findOutlier(ints){
  let z1 = ints.filter(e=>  e%2 ===0 )
  let z2 = ints.filter(e=>  e%2 !==0 )
  return z1.length > z2.length ? z2[0] : z1[0]


}