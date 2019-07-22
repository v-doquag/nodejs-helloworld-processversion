const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) { res.send("NodeJS Process Version : " + process.version)});
app.listen(port, () => console.log('Example app listening on port 3000!'));
