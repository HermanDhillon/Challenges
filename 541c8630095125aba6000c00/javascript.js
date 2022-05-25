function digital_root(n) {
  if(n.toString().length === 1){
    return n
  }else{
    let m = String(n).split("").reduce((a,c)=> a + +c, 0)
    return digital_root(m)
  }
}