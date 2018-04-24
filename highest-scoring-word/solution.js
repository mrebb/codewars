function high(x){
    let scores = [],word;
    
    let temp = x.split(' ');
    
    for(let i = 0; i<temp.length; i++)
    {
      word = temp[i];
      let score = 0;
      for(let j=0; j<word.length; j++){
      score += (word.charAt(j).charCodeAt())-96;
      }
      scores.push(score);
      
    }
    return temp[scores.indexOf(Math.max(...scores))];
  }