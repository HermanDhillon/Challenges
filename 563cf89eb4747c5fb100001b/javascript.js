function removeSmallest(n) {
 return n.filter((e, ind) => ind !== n.indexOf((Math.min(...n))));
}