let uppers = "ABCDEFGHIJKLM"
let chars = "~!@#$%^&*"
let verCode =''
function rndCode(){
  //coding here...
  for(i=0;i<2;i++){
  let x = uppers[~~(uppers.length*Math.random())]
  verCode += x
  }
  for(i=0;i<4;i++){
  let z = ~~(10*Math.random())
  verCode += z
  }
  for(i=0;i<2;i++){
  let y = chars[~~(chars.length*Math.random())]
  verCode += y
  }
  return verCode
}