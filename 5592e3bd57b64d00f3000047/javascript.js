function findNb(m) {
  let count = 0
    while(m>1){
      m -= (count+1)**3
      count++
    }
    return m ? -1 : count;
}
