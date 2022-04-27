function stray(numbers) {
  return numbers.filter((e, _, a) => e !==a[1] && e!==a[-1] )[0]
}