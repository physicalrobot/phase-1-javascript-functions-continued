// code your solution here
function saturdayFun(stuff = 'roller-skate') {
    return `This Saturday, I want to ${stuff}!`

}

function mondayWork(g = 'go to the office') {
    return `This Monday, I will ${g}.`

}

function wrapAdjective(anonfunc = `*`) {
    return function (stuff = 'special') {
        return `You are ${anonfunc}${stuff}${anonfunc}!`

    }
}



