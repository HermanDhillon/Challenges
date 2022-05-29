function encrypt(text, n) {
  if(n <= 0 || text === "" || text === null ){
    return text 
  }
  for(let i = 1; i <=n ; i ++){
    let odds = text.split("").filter((e,i)=> i%2 !== 0)
    let evens = text.split("").filter((e,i)=> i%2 === 0)
    text = odds.concat(evens).join("")
    }
  return text
}

//---------------------------------------------------------------------

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}