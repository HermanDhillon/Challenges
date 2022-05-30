function rowWeights(array){
  let t1 = 0
  let t2 = 0
  array.forEach((e,i)=> i%2 ? t2+=e : t1+=e )
  return [t1, t2]
}