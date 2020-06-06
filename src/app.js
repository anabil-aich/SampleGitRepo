const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const viewspath = path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

//app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req, res) => {
    res.render('index', {
        title: 'My Title',
        name: 'My name'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        name: 'This is help page',
        title: 'help is on the way'
    })
})


app.listen(3000, () => {
    console.log('The servr is up and running')
})