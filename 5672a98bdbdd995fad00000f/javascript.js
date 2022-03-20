const rps = (p1, p2) => {
  let text = ''
  p1 === 'scissors' && p2 === 'paper' ? text = 'Player 1 won!':
  p1 === 'paper' && p2 === 'rock' ?  text = 'Player 1 won!':
  p1 === 'rock' && p2 === 'scissors' ?  text = 'Player 1 won!': 
  p1 === p2 ?  text = 'Draw!' : text = 'Player 2 won!';
  return text
  
};