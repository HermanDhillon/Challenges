function roundIt(n){
  //coding here...
  const numStr = String(n);
  if (numStr.includes(".")){
    if (numStr.split('.')[0].length > numStr.split('.')[1].length){
      return Math.floor(n)
    }else if((numStr.split('.')[0].length < numStr.split('.')[1].length)){
      return Math.ceil(n)
    }else{
      return Math.round(n)
    }
  }
        
 
}