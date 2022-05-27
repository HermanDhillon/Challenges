function solve(s) {
  let arr = [...s].map(e => "aeiou".includes(e) ? " " : e).join("").split(" ").filter(e=> e!=="")
  let valuesArr = arr.map(e => e.split("").reduce((a,c)=> a + c.charCodeAt(0)-96, 0 ))
  return Math.max(...valuesArr)
};