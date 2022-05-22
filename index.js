// Code your solution here
// function findMatching(drivers, name){
//     const newArrayOfDrivers = []
//     for (const name of arrayOfDrivers)
//     if (name === 'Bobby'){
//         newArrayOfDrivers.push(name)
//     }
// }

function findMatching(drivers, name){
    const pikachu = drivers.filter(function(name2){
        return name2 === name || name2 === name.toLowerCase()
    })
    return pikachu
 }

 function fuzzyMatch(drivers, firstLetter){
    const fuzzyMatchedNames = drivers.filter(function(names){
        return names.startsWith(firstLetter);
    })
    return fuzzyMatchedNames
 }

//  function matchName(drivers, moreNames){
//     const whatAreWeLookingFor = drivers.filter(function(){
//         return moreNames.name
//     })
//     return whatAreWeLookingFor
//  }

function matchName(drivers, theWeeknd){
    const whatAreWeLookingFor = drivers.filter(function(nameProperties){
        return nameProperties.name === theWeeknd
    })
    return whatAreWeLookingFor
 }