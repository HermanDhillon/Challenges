function vowelIndices(word){
  return  word.toLowerCase().split("").map((e,i)=> "aeiouy".includes(e) ? i+1 : null).filter(e=> e !== null)
}