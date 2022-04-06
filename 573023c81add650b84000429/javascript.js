function countGrade(scores){
  //coding here...
  let obj = {}
  obj.S = scores.filter(x => x===100).length 
  obj.A = scores.filter(x => x>= 90 && x<100).length 
  obj.B = scores.filter(x => x>= 80 && x<90).length 
  obj.C = scores.filter(x => x>= 60 && x<80).length 
  obj.D = scores.filter(x => x>= 0 && x<60).length 
  obj.X = scores.filter(x => x === -1).length 
  return obj
}