function formateName(firstName, lastName){
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay){
    if (timeOfDay === "morning"){
        return `Good Morning`
    }
    if(timeOfDay ==="afternoon"){
        return `Good afternoon`
    }
    return 'Good Evening'
}

function createGreeting(firstName,lastName,timeOfDay){
    const greeting = getGreeting(timeOfDay)
    const name = formateName(firstName, lastName)

    return `${greeting} ${name}`
}

console.log(createGreeting('vishal','kushawah','morning'));
