function insertDash(num) {
  
    var result = num.toString().split('');
  // for loop to iterate through array
    for(var i=0; i<result.length; i++){
    // check for odd numbers
      if(result[i]%2 && result[i+1]%2){
        result[i] += '-'
   
      }
  
  }
  return result.join('');
}