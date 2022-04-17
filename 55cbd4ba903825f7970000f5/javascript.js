function getGrade (s1, s2, s3) {
  let score = (s1+s3+s2)/3
  return score>=90 ? "A" : score>= 80 ? "B" : score>= 70 ? "C" : score>=60 ? "D" : "F"
}