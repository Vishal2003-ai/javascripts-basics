let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
//console.log(typeof myDate);


// let myCreatedDAte = new Date(2026,0,25)
// let myCreatedDAte = new Date(2026,0,25,5,30,0)
// let myCreatedDAte = new Date("2026-01-14");
let myCreatedDAte = new Date("01-14-2026");
// console.log(myCreatedDAte.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDAte.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
//console.log(newDate.getMonth() + 1 );
// console.log(newDate.getDay());


//console.log(`${newDate.getDay()} and the time value is ${newDate.getTime()}`)

const dateName = newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata"
})

console.log(dateName);
