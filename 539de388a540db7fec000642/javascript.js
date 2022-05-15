function checkCoupon(eC, cC, cD, eD){
  console.log(eC, cC, cD, eD)
  return eC === cC && Date.parse(cD) <= Date.parse(eD)
}