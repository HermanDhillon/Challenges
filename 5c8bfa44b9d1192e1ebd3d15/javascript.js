function warnTheSheep(q) {
return "wolf" === q[q.length-1] ? "Pls go away and stop eating my sheep" : 
`Oi! Sheep number ${q.reverse().indexOf("wolf")}! You are about to be eaten by a wolf!`
}