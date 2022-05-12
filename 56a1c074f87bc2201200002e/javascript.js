function smaller(nums) {
return nums.map((e,i,a) => a.slice(i).sort((a,b)=>a-b).indexOf(e))
}