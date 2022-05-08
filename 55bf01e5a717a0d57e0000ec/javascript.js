function persistence(num) {
   let Count = 0
   let data = [String(num), Count]
  
   function per(data){
    if(data[0].length ===1){
      return data[1]
    }else{
     let arr = String(data[0]).split("")
     data[1]++
     return per([String(arr.reduce((a,c) => +a*+c)), data[1]])   
    }
  }
  return per(data)
  }