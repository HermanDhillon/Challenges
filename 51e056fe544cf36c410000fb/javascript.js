function topThreeWords(text) {
 let  str1 = text.toLowerCase().split("").filter(e => e.charCodeAt(0) === 32 || e.charCodeAt(0) === 39 ||  e.charCodeAt(0) >=65 && e.charCodeAt(0) <= 122).join('')
 
  let count = {};
  str1.split(" ").forEach(e => count[e] = count[e] +1 || 1)
  
  let sortable = [];
  for (var word in count) {
    if(word != "" && word != "'"){
    sortable.push([word, count[word]]);
      }
    }

//   let filSort = sortable.filter(([w,_]) => w !== "" && w !== "'")
  return sortable.sort((a,b) => b[1]-a[1]).map(([w,c])=> w).slice(0,3)
 }