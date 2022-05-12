//return the total number of smiling faces in the array
function countSmileys(arr) {
let faces = ":-) :-D :~) :~D, :) :D ;-) ;-D ;~) ;~D, ;) ;D"
let i = 0
arr.forEach(e => faces.includes(e) ? i++ : null )
return i
}