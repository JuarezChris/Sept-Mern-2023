

// ! Hackerrank Link To The Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem 
// ? Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


const nbaAthletes = [
    {id: 1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id: 2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id: 3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id: 4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id: 5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id: 6, name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

// ? Given the array above use the map method to return a new array of objects with only the name and position of each player
// Tasks 
// use map method
// target name and position of each player 
// use a const variable to store new array 

// const newNbaArr = nbaAthletes.map((athlete) => {
//     return {name: athlete.name, position : athlete.position}
// })
// console.log(newNbaArr)



// ? Given the array above use the filter method to return a new array of objects where the player is currently active in the nba

// const newNbaArr = nbaAthletes.filter((athlete) => athlete.active).map((athlete) => ({name: athlete.name, position : athlete.position})
//     )
// console.log(newNbaArr)

// const newNbaArr = nbaAthletes.map((athlete) => {
//     if(athlete.active == true){
//         return athlete
//     }
//     else{
//         console.log("hi")
//     }
// })
// console.log(newNbaArr)



// ? Given the array above use the filter method to return a new array of objects where the player is a point guard

const newNbaArr = nbaAthletes.filter((athlete) => athlete.position == 'Point Guard')
console.log(newNbaArr)


// ? Given the array above write a function that takes in an id for a player to be 'deleted' Use the filter method to return a new array of athlete objects minus the player with the id that matches what was passed in



