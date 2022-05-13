const reverseSeq = n => {
  return [...new Array(n)].map((e,i) => n-i) ;
};