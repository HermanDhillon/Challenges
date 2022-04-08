function validatePIN (pin) {
  
 return pin.split('').filter(element => (!+element  && element !== "0")).length > 0 ? false : [4, 6].includes(pin.length)
}