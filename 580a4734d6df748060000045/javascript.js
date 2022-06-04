function isSortedAndHow(array) {
 
  let asc = [...array].sort((a,b)=> a-b).join(",") === array.join(",")
  let des = [...array].sort((a,b)=> b-a).join(",") === array.join(",")
  return asc ?  "yes, ascending" : des ? "yes, descending" : "no"

  
}