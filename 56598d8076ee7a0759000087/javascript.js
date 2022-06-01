function calculateTip(amount, rating) {
  let rating1 = rating.toLowerCase()
return rating1 === "terrible" ? 0 :
      rating1 === "poor" ? Math.ceil(amount*0.05) :
      rating1 === "good" ? Math.ceil(amount*0.1) :
      rating1 === "great" ? Math.ceil(amount*0.15) :
      rating1 === "excellent" ?  Math.ceil(amount*0.2) : "Rating not recognised"

}