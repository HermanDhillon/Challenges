// complete the function
function solution(string) {
   return  string.split("").map(e => e.charCodeAt(0)>64 && e.charCodeAt(0)<97 ? (" " + e) : e ).join("")
}
