function cutIt(arr){
  //coding here...
  let smallestLength = arr.reduce((acc, c) => c.length < acc.length ? c: acc, arr[0]).length
  let newArr = arr.map((element) => element.slice(0, smallestLength))
  return newArr
  

       
       
       
//      }
}