function splitAndMerge(string, separator) {
  let x = string.split("")
  let newARR = x.map( (element, index, array) => index !== array.length-1 && array[index+1] !== " " && element !== " " ? element.concat(separator) : element )
  return newARR.join("")
}