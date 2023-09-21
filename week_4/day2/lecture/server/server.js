const express = require('express')
const app = express()

const port = '8000'

app.use(express.json())
app.use( express.urlencoded( {extended:true}) )


const chickens = [
    {id:1,name: 'Chicken little', from: 'Chicken little movie'},
    {id:2,name: 'Babs', from: 'Chicken Run'},
    {id:3,name: 'Foghorn Leghorn', from: 'Looney Tunes'},
    {id:4,name: 'Robot Chicken', from: 'Robot Chicken'},
    {id:5, name: 'Cruela', from: 'Rindys chicken farm'},
    {id:6, name: 'Yaaha', from: 'Rindys chicken farm'},
]

app.get('/api',(request, response) => {
        console.log('We have made a request to /api')
        // console.log(request)
        response.json(chickens)
})

app.post('/api/newChick', (req, res) => {
    console.log(req.body)
    console.log(req)
    chickens.push(req.body)
    res.json({message:"Added a new chicken"})
})

app.get('/api/:id', (req, res) => {
    console.log(req.params.id)
    console.log(`We retrieved chick number ${req.params.id}`)
    res.json({chicken: chickens[req.params.id-1]})
})



app.listen( port, () => console.log(`Listening on port: ${port}`))