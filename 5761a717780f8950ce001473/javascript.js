function  calculateAge(bY, y) {
  let age = y-bY
return  age === 1 ? `You are ${age} year old.` : 
        age === -1 ? `You will be born in ${Math.abs(age)} year.` :
        age === 0 ? `You were born this very year!` :
        age < 0 ? `You will be born in ${Math.abs(age)} years.` : `You are ${age} years old.`
        
        

}

