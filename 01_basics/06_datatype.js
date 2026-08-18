//primitive
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // 1.Number
const scoreValue = 100.3 //Number

const IsLoggedIn = false // 2.Boolean

const outsideTemp = null // 3.null 

let userEmail = undefined //4.undefined
let UserEmail; // is the other type of define a undefined datatype

const id = Symbol('123')// 5. symbola datatype
const anotherId = Symbol('123') 
//console.log( id === anotherId) check the id value in aotherId in fales value

const bigNumber = 3254621564565246546n //6. this is a bigint datatype
//console.log(typeof bigNumber)// this is a type of bigint data type always put the n in the last of number


const text = "this is a line of the preagraph"//7. this is a datatype of string

// Reference (Non-Primitive)

// Array, Objects, Functions
  
const heros = ["vishal","shashank","raj"]//array

// this is a object datatype in non-primitive
let data = {
    name:"vishla",
    age:20,
    phone : "8923777031"
}

const myfunction = function(){
    console.log("hello world");
}

//using typeof function in javascript find the type of any datatype
//console.log(typeof data);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-primitive)

let myYoutubename = "vishalkushawah"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername) 