function solve(arr){  
return arr.map(e=> e.toLowerCase().split("").reduce((a,c,i)=> (i+1) === c.charCodeAt(0)-96 ? a+1 : a+0, 0))
};