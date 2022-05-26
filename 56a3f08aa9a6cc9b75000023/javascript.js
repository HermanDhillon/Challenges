function validateUsr(username) {
  res =  "1234567890abcdefghijklmnopqrstuvwxyz_"
  return username.split("").every(e=> res.includes(e)) && username.length >= 4 && username.length <= 16
}