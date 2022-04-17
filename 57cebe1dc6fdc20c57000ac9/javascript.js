function findShort(s){
  return s.split(' ').reduce((t,c)=> c.length < t ? t=c.length : t,1000)
}