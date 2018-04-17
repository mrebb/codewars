function cubeOdd(arr) {

    let sum = arr.filter((a)=> {return (a%2 !== 0)}).map(b =>(Math.pow(b,3))).reduce(((acc,curr) => (acc+curr)),0);
 
   if(isNaN(sum)){
    return undefined;
    }

    return sum;
}