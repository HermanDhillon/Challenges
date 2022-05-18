function chain(input, fs) {
return fs.reduce((a,c,i) => fs[i](a), input )
//   
}