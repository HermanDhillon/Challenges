function getNumberFromString(s) {
  console.log(s)
  return +(s.split("").filter(e=> +e == e && e !== " ").join(""))
}