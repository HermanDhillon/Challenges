function getHints(code, guess) {
  let obj = {black: 0, white: 0}

  for(let i= 0 ; i<guess.length; i++){
    for( let j = 0 ; j<code.length; j++){   //code
      if(guess[i] === code[j] && i === j){
         obj["black"] += 1
        guess.splice(i, 1, "BG")
        code.splice(j, 1, "BC")
        }
    }
  }
  for(let i= 0 ; i<guess.length; i++){
    for( let j = 0 ; j<code.length; j++){   //code
      if(guess[i] === code[j] && i !== j){
         obj["white"] += 1
        guess.splice(i, 1, "WG")
        code.splice(j, 1, "WC")
        }
    }
  }

  return obj
  
}