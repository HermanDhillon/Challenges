function sumDigits(number) {
 return Math.abs(number).toString().split('').reduce((acc,c) => acc + +c, 0)
}
