var express = require('express')
var app = express()

app.use(express.static(__dirname + '/../public'))

app.get('/api/v1/chart/ZNY', (req, res) => {
    require(__dirname + '/functions/get-chart-zny').myHandler({}, {}, (body) => { res.json(body) })
})

app.listen(3000)
