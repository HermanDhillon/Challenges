var capitals = function (word) {
	
 return word.split("").map((e,i) => e===e.toUpperCase() ? i : null).filter(e => e != null)
};