function evaporator(content, e, threshold){ 
  let remaining = 100
  let i = 0
  while(remaining >= threshold ){
    remaining = remaining - remaining*(e/100)
    console.log(remaining, i)
    i++
    
  }
  console.log("---------------------------------------------------")
  return i 
}