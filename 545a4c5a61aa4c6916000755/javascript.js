function gimme(t) {
return t.indexOf( [...t].sort((a,b) => a - b)[1])
}