var humanYearsCatYearsDogYears = function(hy) {
  let s = hy >= 2? 1 : 0
  let dog = 15 + 9*s + 5*s*(hy-2)
  let cat = 15 + 9*s + 4*s*(hy-2)
  return [hy, cat, dog];
}
