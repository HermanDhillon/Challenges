function race(v1, v2, g) {
  let t = -g/(v1-v2)
  let hours = Math.floor(t)
  let mins = (t - hours)*60.001
  let secs = (mins - ~~mins)*60.001
  return v1>+v2 ? null : [~~hours, ~~mins, ~~secs]
}