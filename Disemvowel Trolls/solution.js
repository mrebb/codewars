function disemvowel(str) {

    return str.replace(/[aeiou]/gi, '');
     
   }

   /* traditional way

   function disemvowel(str) {
    let arr = str.split("");
    for(let i=0; i<arr.length; i++){
      if(arr[i] == 'a' || arr[i] == 'e'|| arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' || arr[i] == 'A' || arr[i] == 'E'|| arr[i] == 'I' || arr[i] == 'O' || arr[i] == 'U'  ){
       arr[i] = '';
      }
    }
    return arr.join('');
  } */