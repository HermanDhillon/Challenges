function stockList(lA, lC){
  let c = {}
  lA.forEach( (e,i) =>  c[e[0]] = (c[e[0]] || 0 ) + parseInt(lA[i].split(" ")[1], 10) )
  return lA.length < 1 || lC.lenght < 1 ? "" : lC.map(e => `(${e} : ${c[e] || 0})`).join(" - ")
 }