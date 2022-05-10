function findDifference(a, b) {
return Math.abs(a.reduce((x,c)=>x*c)-b.reduce((y,e)=>y*e))
}