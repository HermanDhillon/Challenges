function likes(names) {
  let numPeople = names.length
  if(!numPeople){
    return "no one likes this"
  }else if(numPeople === 1){
    return `${names[0]} likes this`
  }else if(numPeople === 2){
    return `${names[0]} ` + "and " + `${names[1]} like this`
  }else if(numPeople === 3){
    return `${names[0]}, ${names[1]} ` + "and " + `${names[2]} like this`
  }else{
    return `${names[0]}, ${names[1]} ` + "and " + `${numPeople-2} others like this`
  }
}