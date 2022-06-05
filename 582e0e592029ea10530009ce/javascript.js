function duckDuckGoose(players, goose) {
  let ind = goose%players.length-1
  return players.slice(ind)[0]["name"]
}