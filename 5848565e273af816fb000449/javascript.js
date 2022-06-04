var encryptThis = function(text) {
  console.log(text)
  return text.split(" ").map(e => e.length > 2 ? (e[0].charCodeAt(0) + e[e.length-1] + e.slice(2, e.length-1) + (e[1] || "" )) : e[0].charCodeAt(0) + (e[1] || "" )  ).join(" ")
}