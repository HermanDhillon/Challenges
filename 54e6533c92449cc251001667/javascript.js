var uniqueInOrder=function(iter){

 typeof iter === "string" ? iter = iter.split("") : null
 
  return iter.map((c,i, a)=> c !== a[i+1] ? c : null ).filter(e=> e!==null)
}