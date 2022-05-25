const hexToBase64 = hex => {
  var base64String = Buffer.from(hex, 'hex').toString('base64')
 return base64String
}