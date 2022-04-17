function oddOrEven(array) {
   return array.reduce((t, c) => t+c, 0)%2 ===0 ? "even" : "odd"
  }