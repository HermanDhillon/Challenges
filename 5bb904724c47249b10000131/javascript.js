function points(games) {
  return games.reduce((t,[x,_,y]) => t + (x>y ? 3: x<y ? 0 : 1 ),0)
}