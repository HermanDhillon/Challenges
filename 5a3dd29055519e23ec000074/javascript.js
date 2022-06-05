function checkExam(array1, array2) {
  let score = array2.reduce((a,c,i)=> c === "" ? a+0 : c===array1[i] ? a+4 : a-1, 0)
 return score < 0 ? 0 : score
}