function correct(string)
{
	 return string.split("").map(e => e === '5' ? "S" : e === '0' ? "O" : e==='1' ? "I" : e).join('')
}