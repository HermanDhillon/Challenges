function timeMath(time1, op, time2) {
  let t1 = time1.split(":")
  let t2 = time2.split(":")
  
  function timeAdd(t1, t2){
    let total = (+t1[0] + +t2[0])*3600 + (+t1[1] + +t2[1])*60 + (+t1[2] + +t2[2])
    let hours = Math.floor(total/3600)
    let mins  = Math.floor(((total/3600)-hours)*60)
    let secs = Math.round(((((total/3600)-hours)*60) - mins)*60)
    if(hours >= 24){
      hours -= 24
    }
    return `${ hours<10 ? "0"+hours : hours}:${mins < 10 ? "0"+mins: mins}:${secs<10 ? "0"+secs : secs}`
    }
  
  function timeSub(t1, t2){
    let total = (+t1[0] - +t2[0])*3600 + (+t1[1] - +t2[1])*60 + (+t1[2] - +t2[2])
    let hours = Math.floor(total/3600)
    let mins  = Math.floor(((total/3600)-hours)*60)
    let secs = Math.round(((((total/3600)-hours)*60) - mins)*60)
    if(hours < 0){
      hours += 24
    }
    return `${ hours<10 ? "0"+hours : hours}:${mins < 10 ? "0"+mins: mins}:${secs<10 ? "0"+secs : secs}`
    }
  
  
  
  return op === "+" ? timeAdd(t1, t2) : timeSub(t1, t2)
  
}
