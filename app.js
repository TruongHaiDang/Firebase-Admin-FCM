const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const server = http.createServer(app);

const PORT = process.env.PORT || 6969;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

app.get('/', function (req, res) {
    res.send(`Server is listening on port ${PORT}`)
})

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))