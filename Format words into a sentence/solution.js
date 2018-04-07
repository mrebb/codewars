function formatWords(words){
    if (!words){ return "" }
    words = words.filter(word => { return word});
     let len = words.length;
     if(len>1){
     let last = ' and ' + words.splice(len-1);
    return words.join(', ').concat(last);}
    else if (len==1){ 
    return words[0];
    }
    else{
      return "";
    }
  }
//Test methods wuth chai.js:
 var expect = require("chai").expect;
 var assert = require("chai").assert;
 require("chai").should();

 assert.equal(formatWords(['ninja', 'samurai', 'ronin']), "ninja, samurai and ronin");
 assert.equal(formatWords(['ninja', '', 'ronin']), "ninja and ronin");
 assert.equal(formatWords([]), "");

 //Test-methods traditional style:
 describe("Format words into a sentence", function(){
    it("Test for format words into sentence", function(){
     Test.assertEquals(formatWords(['ninja', 'samurai', 'ronin']), "ninja, samurai and ronin", "Test passed");
     Test.assertEquals(formatWords(['ninja', '', 'ronin']), "ninja and ronin", "Test passed");
     Test.assertEquals(formatWords([]), "", "Test passed");
    });
  });

  /* Solution-2 with words.pop()
  function formatWords(words){
  if (!words){ return "" }
  words = words.filter(word => { return word});
  
   let len = words.length;
   if(len>1){
   let last = ' and ' + words.pop();
  return words.join(', ').concat(last);}
  else if (len==1){ 
  return words[0];
  }
  else{
    return "";
  }
}*/

/* Solution-3 without filter method
function formatWords(words){
  if (!words){ return "" }
  let temp = [];
  for(let i of words){
    i && temp.push(i); }
     words = temp;
   let len = words.length;
   if(len>1){
   let last = ' and ' + words.splice(len-1);
  return words.join(', ').concat(last);}
  else if (len==1){ 
  return words[0];
  }
  else{
    return "";
  }
}*/