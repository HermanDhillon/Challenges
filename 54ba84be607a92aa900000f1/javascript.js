function isIsogram(str){
  return new Set(str.toLowerCase().split("")).size === str.toLowerCase().split('').length
}