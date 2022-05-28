function lowercaseCount(str){
   return str.split("").filter(e => e === e.toLowerCase() && "abcdefghijklmnopqrstuvwxyz".includes(e)).length

}