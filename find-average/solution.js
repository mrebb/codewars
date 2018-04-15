function find_average(array) {
    // your code here
     let result = array.reduce((accu,curr)=> (accu+curr))
    return result/(array.length);
  }