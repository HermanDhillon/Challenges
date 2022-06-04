function isVow(a){ 
  let vC = [ "a".charCodeAt(0), "e".charCodeAt(0), "i".charCodeAt(0),"o".charCodeAt(0), "u".charCodeAt(0)]
  return  a.map(e => vC.includes(e) ? String.fromCharCode(e) : e )
}