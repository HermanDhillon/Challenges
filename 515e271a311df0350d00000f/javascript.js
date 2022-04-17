function squareSum(numbers){
return numbers.reduce((t, c) => c*c + t, 0)
}