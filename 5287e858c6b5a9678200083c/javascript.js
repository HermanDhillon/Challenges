function narcissistic(n) {
  return String(n).split("").reduce((a,c)=> a + (+c)**(String(n).length), 0) === n
}
