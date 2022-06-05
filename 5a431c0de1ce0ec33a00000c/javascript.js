function evenNumbers(array, number) {
return array.filter(e=> !(e%2)).reverse().slice(0,number).reverse()
}