function solution(str){
  if(str === ""){
    return []
  }
   let arr2 = []
   while(str.length > 0){
     arr2.push(str.slice(0,2))
     str = str.slice(2) 
   }
  arr2[arr2.length-1].length === 1 ? arr2[arr2.length-1] = arr2[arr2.length-1] + "_" : null
  
  return arr2
}