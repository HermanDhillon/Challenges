function declareWinner(fighter1, fighter2, firstAttacker) {

  let p1 = firstAttacker === fighter1.name ? fighter1 : fighter2
  let p2 = firstAttacker === fighter1.name ? fighter2 : fighter1
  
  while(p1.health > 0 || p2.health){
    p2.health -= p1.damagePerAttack
     if(p2.health <= 0){
       return p1.name
       }
    
    p1.health -= p2.damagePerAttack
    if(p1.health <= 0){
      return p2.name
    } 
    
  }

}
