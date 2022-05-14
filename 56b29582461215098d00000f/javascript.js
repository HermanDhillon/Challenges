function pipeFix(numbers){
let a = []

for(let i = Math.min(...numbers) ; i <= Math.max(...numbers); i++  ){
  a.push(i)
}
  return a
}