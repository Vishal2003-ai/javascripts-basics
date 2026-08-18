const name = "hitesh"
const repiCount = 50
// console.log(name + repiCount); // using this methord add 2 string 

// console.log(`Hello world my name is ${name} any my repocount is ${repiCount}`); // add some more vareavles by using the this methord

const gameName = new String('Vishalkushawah') // create a new function by stings 
// console.log(gameName[0]);// form find the lenght of string
// console.log(gameName.__proto__);

// console.log(gameName.length); // form find the lenght of string
// console.log(gameName.toUpperCase()); // for convert to string lower case to upper case
// console.log(gameName.charAt(2)); // fro find the character in which position by number
// console.log(gameName.indexOf('a')); // for find the charater lenght by a charater


const newString = gameName.substring(0,4)// in this substing function write the string to given index number 0 to 9 etc
//console.log(newString);

const anotherString = gameName.slice(-8, 4)// only this function given the negative value 
//console.log(anotherString);


const newStringOne = "    vishal   "
//console.log(newStringOne);
//console.log(newStringOne.trim());// in is function remove extra space in string text

const url = "https://vishalkushawah.com/vishal%kushawah30"

// console.log(url.replace('%20','-'));

// console.log(url.includes('sundar'));


console.log(gameName.split('-'));
