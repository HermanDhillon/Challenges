function getMiddle(s)
{
  let l = Math.floor(s.length/2)
  return s.length%2 ? s[l] : s[l-1] + s[l]
}