function titleCase(title, mW) {
  
  
  let m = (mW || " ").toLowerCase() + " "
  
  return title.length < 1 ? "" : title.toLowerCase().split(" ").map((e,i)=> m.includes(e+ " ") && i!==0 ? e : e[0].toUpperCase() + (e.slice(1) || "" )).join(' ')
  
}
