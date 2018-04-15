Use map() to double the values in an array
=========================================
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

Test methods
================
var test1 = [1,2,3,4,5];
var test2 = [71,-548,12.3,31415];

Test.assertSimilar(double(test1), [2,4,6,8,10]);
Test.assertSimilar(double(test2), [142,-1096,24.6,62830]);

