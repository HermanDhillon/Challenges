function spinWords(str){
  return str.split(" ").map(e=> e.length > 4 ? e.split("").reverse().join("") : e).join(" ")
}