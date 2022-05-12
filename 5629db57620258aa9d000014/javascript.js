function mix(s1, s2) { 
  
  const onlyLowers = str => str.split("").filter(e=> e.charCodeAt(0) >96 && e.charCodeAt(0) < 123 )
  
  const counter = arr => {
    let o = {}; 
    arr.forEach(e=> o[e] = (o[e] || 0 ) +1) ;
    return o 
  }

  c1 = counter(onlyLowers(s1))
  c2 = counter(onlyLowers(s2))

  let sortable = [];
  Object.keys(c1).forEach(key => sortable.push(key))
  Object.keys(c2).forEach(key => sortable.push(key))
  
  let newString = [...new Set(sortable)].map(e => 
                  c1[e] > c2[e] ? "1:" + e.repeat(c1[e]) :
                  c2[e] > c1[e] ? "2:" + e.repeat(c2[e]) : 
                  c2[e] === c1[e] ? "=:" + e.repeat((c1[e] || c2[e])): 
                  c2[e] ?  "2:" + e.repeat(c2[e]) : "1:" + e.repeat(c1[e])                         
                  ).filter(e=> e.length>3).sort((a,b) => b.length - a.length)
  
  let iWSCL = newString.map((e,i,a)=> e.length != (a[i+1] || e).length ? (newString.indexOf(a[i+1]) || undefined) : null).filter(e=>e!= null)// indexesWhereStringChangesLength
  iWSCL.unshift(0)

  for(let i =0; i<iWSCL.length; i++){
   
    let endIndex = iWSCL[i+1] || undefined
    let startIndex = iWSCL[i]
    let subString = newString.slice(startIndex, endIndex).sort()
    for(let j =0; j<subString.length; j++){
      newString[startIndex+j] =subString[j]
    }
  }

  return newString.join("/")
}