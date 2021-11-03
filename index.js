// Your code here
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`;
    }

saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home");

function wrapAdjective (flair = "*"){
    return function innerFunction (str = "special"){
        return `You are ${flair}${str}${flair}!`
    } 
    
}
