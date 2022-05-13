function findEvenIndex(arr)
{

  let ind = 0

  for(let i = 0 ; i < arr.length; i++){
    
    let fH = arr.slice(0, i).reduce((a,c)=> a+c,0)  
    let sH = arr.slice(i+1).reduce((a,c)=> a+c,0)   
    
    if(sH === fH){
      ind = i 
      return i
    }else if(i === arr.length-1){
      return -1
    }
  }

}