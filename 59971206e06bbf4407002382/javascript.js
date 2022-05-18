var sumAndMultiply = function(sum, mul) {
//    a*x^2 - b*x + c = 0
//   x^2 -sum*x + mul = 0
//  a = 1, b  = -sum, c = mul
    let b = -sum
  
    let x1 = (-b + Math.sqrt(b**2 - 4*mul))/2
    let x2 = (-b - Math.sqrt(b**2 - 4*mul))/2
    let x = Math.max(x1, x2)
    
    return x%1 || !x ? null : [sum-x, x]
}
