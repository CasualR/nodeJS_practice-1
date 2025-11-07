const express = require('express')
const app = express()
const PORT = 8383

let data = ['Mykola']

// Middleware
app.use(express.json())

// Website endpoints

app.get('/', (req, res) => {
    res.send(`
        <body style="background:pink; color: blue;">
            <h1>DATA: </h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body">
            <h1>Dashboard</h1>
            <a href="/">home</a>
        </body>
        `)
})

// API endpoints (non-visual)

app.get('/api/data', (req, res) => {
    console.log('for data');
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/endpoint', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))