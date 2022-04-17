function alphabetPosition(text) {
  return text.toUpperCase().split("").map(e => e.charCodeAt(0)-64 > 0 && e.charCodeAt(0)-64 < 27 ? e.charCodeAt(0)-64 : '').filter(e => e !== '').join(' ')
}