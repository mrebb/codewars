function checkExam(array1, array2) {
    //initialize the score variable and assign zero
    var score = 0;
    //Loop through both arrays and compare values at same positions
    for(var i = 0; i<array1.length; i++){
      //only enter here when array value is not empty
      if(array2[i] !== ""){ 
        if(array1[i] === array2[i]){
         score = parseInt(score) + 4; 
        }
        else if(array1[i] != array2[i]){
        score = parseInt(score) - 1; 
        }
      }
    }
    //return score value only when score is positive
    if(score>0){
    return score;
    }
    //otherwise return 0
    else{
      return 0;
    }
}
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]);
checkExam(["a", "a", "c", "b"], ["a", "", "b",  ""]);