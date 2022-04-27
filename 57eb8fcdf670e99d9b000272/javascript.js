function high(x){
 
let arr  = x.split(" ").map(e => e.split("").reduce((acc, curr) => acc+ curr.charCodeAt(0)-96, 0))
let index = arr.indexOf(Math.max(... arr))
return x.split(' ')[index]
}