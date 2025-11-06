const express = require('express')
const app = express()
const PORT = 8383

// Website endpoints

app.get('/', (req, res) => {
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
    console.log('I hit the /dashboard endpoint')
    res.send('hi')
})

// API endpoints (non-visual)

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))