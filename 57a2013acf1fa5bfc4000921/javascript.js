function find_average(array) {
  // your code here
  return array.length === 0 ? 0 : array.reduce((a,c)=> a+c,0)/array.length;
}