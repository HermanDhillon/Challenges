function cakes(r, a) {
  let ratios = []
  for (const [key, value] of Object.entries(r)) {
    ratios.push((a[key] || 0)/r[key])
}
return ~~Math.min(...ratios)
}