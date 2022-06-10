function abbreviate(string) {
  let arr = string.split(' ')
  let subArr = []
//   console.log(arr[0][0] + (arr[0].length -2 ) + arr[0][arr[0].length-1])
  for(let i =0 ; i<arr.length; i++){
    if(arr[i].length >= 4){
        console.log(arr)

      if(arr[i].includes("-")){
        let subArr = arr[i].split('-')
        for(let j =0 ; j<subArr.length; j++){
          subArr[j] = subArr[j][0] + (subArr[j].length - 2) + subArr[j][subArr[j].length-1]
        }
        arr[i] = subArr.join("-")
      }else{
      arr[i] = arr[i][0] + (arr[i][arr[i].length-1] === "," ? (arr[i].length - 3) : (arr[i].length - 2) ) + ( arr[i][arr[i].length-1] ==="," ? (arr[i][arr[i].length-2] + ",") : arr[i][arr[i].length-1])
        }
      console.log(arr)
    }
  }
  
  return arr.join(" ")
}