// array

const myArr = [0,1,2,3,4,5,6,7] // create a array use [ ] sqr backets
//console.log(myArr);
//console.log(typeof myArr); // object type 

//console.log(myArr[2]); // find the index value

// Array methods

// myArr.push(8)// add the value in the end of array
// myArr.push(9)// add the value in the end of array
// myArr.unshift(5) // add the value in the start of array
// myArr.pop() // remove the last value of array
// myArr.shift() // remove the first value of array

//console.log(myArr.includes(9)); // check the value is present in array or not
//console.log(myArr.indexOf(3));// find the index of value in array
const newArr = myArr.join() // join the array values with given string
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// slice, splice
// slice - return the new array from given index to given index
// splice - remove the values from given index to given index and return the removed values
// console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);