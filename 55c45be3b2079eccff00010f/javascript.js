function order(words){
  let arr = [...Array(words.split(" ").length)]
  words.split(" ").forEach((w) => w.split('').forEach(l => !isNaN(l) ? arr[+l-1]=w : null ))
  return arr.join(" ")
}