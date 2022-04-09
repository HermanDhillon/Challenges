function accum(s) {
	return s.toUpperCase().split('').map((element, index) => element + element.toLowerCase().repeat(index)).join("-")
} 