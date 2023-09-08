

const nflPlayers = [
    {name: 'Khalil Mack', team: 'Chargers', position: "OLB"},
    {name: 'DJ Moore', team: 'Bears', position: "WR"},
    {name: 'Justin Fields', team: 'Bears', position: "QB"}
]

// const players = nflPlayers.map((athlete, idx, wholeArr) => {
//     console.log('Name:',athlete.name, 'Index:', idx)
//     // console.log(wholeArr)
//     return athlete.name
// })
// console.log(players)

// const bearsPlayers = nflPlayers.filter((athlete) => {
//     if(athlete.team == 'Bears'){
//         return true
//     }
// })

const bearsPlayers = nflPlayers.filter( (athlete) => athlete.team.includes('Bears'))

console.log(bearsPlayers)