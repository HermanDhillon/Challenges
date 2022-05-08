function expandedForm(num) {
  return String(num).split("").reverse().map((e,i) => +(e+"0".repeat(i))).reverse().filter(e => e!==0).join(" + ")
}