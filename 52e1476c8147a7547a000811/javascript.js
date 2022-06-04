function validate(password) {
  
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lc = "abcdefghijklmnopqrstuvwxyz".split("").some(e=> password.includes(e))
  let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").some(e=> password.includes(e))
  let num = "0123456789".split("").some(e=> password.includes(e))
  let sp = password.split("").every(e=> str.includes(e))
  let len = password.length >= 6

  return len && lc && uc && num && sp
}