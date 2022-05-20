function stringClean(s){
  return s.split("").filter(e => parseInt(e) !== +e ).join("")
  
}