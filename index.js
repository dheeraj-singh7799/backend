require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

// const githubData= dheerajsingh

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=> {
    res.send('hello duniya')
})

app.get('/login',(req,res)=> {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.get('/github',(req,res)=>{
    res.json('githubData')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

