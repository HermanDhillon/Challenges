function toCamelCase(str){
  let x = []
if(str.includes("-")){
  x = str.split("-")
}else{
  x = str.split("_")
}
  for(let i = 1; i < x.length; i++){
    x[i] = x[i][0].toUpperCase() + x[i].slice(1)
  }
  return x.join("")
}