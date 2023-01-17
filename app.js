const express = require('express')
const app = express()
const port = 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/mohamed-dev', (req, res) => {
    res.render('index')
})

app.get('/terms', (req, res) => {
    res.render('terms')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})