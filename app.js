const express = require('express');
const app = express()


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

const info = {
    firstName: 'Mohamed',
    secName: 'Rabie',
    fullName: 'Mohamed Rabie',
}

const logo = ("data:image/jpeg;base64,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")


const siteVariabls = {
    info: info,
    myLogo: logo
}

app.get('/', (req, res) => {
    res.render('index', siteVariabls)
})

app.get('/terms', (req, res) => {
    res.render('pages/terms', siteVariabls)
})
app.get('/about', (req, res) => {
    res.render('pages/about', siteVariabls)
})


const port = 8080
app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})