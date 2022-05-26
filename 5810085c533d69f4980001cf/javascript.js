function calculator(a,b,sign){
  try{
    return eval(a+sign+b)
  }catch(error){
    return "unknown value"
  }
}