const express = require('express')
const app = express()
const port = 8000

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*.localdev.me");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

//...
app.use(allowCrossDomain);
app.use(express.static('dist/angular-gzweb'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})