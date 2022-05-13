"use strict";

function flattenAndSort(array) {
let arr = []
array.forEach(e => arr = arr.concat(e))
return arr.sort((a,b) => a-b)
}