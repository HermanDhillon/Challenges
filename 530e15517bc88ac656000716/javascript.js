function rot13(m){
  let arr = []
  for(let i =0; i< m.length; i++){
    if(m[i].charCodeAt(0)-96 > 0 && m[i].charCodeAt(0)-96 < 27 ){     //LowerCase
      let letter = String.fromCharCode((((m[i].charCodeAt(0)-96+13)%26)+96))
      arr.push(letter==="`" ? "z" : letter)
    }else if( m[i].charCodeAt(0)-64 > 0 && m[i].charCodeAt(0)-64 < 27){//UpperCase
       let letter = String.fromCharCode((((m[i].charCodeAt(0)-64+13)%26)+64))
        arr.push(letter)
    }else{                                                                   //Others
      arr.push(m[i])
    }    
  }
  return arr.join("")
}