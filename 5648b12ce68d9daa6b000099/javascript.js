var number = function(busStops){
  return busStops.reduce((t, c) => t + c.reduce((tot, cur, curin)=> curin===0 ? tot+cur : tot-cur, 0 ),0)
}