const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', cors(), async (req, res) => {
    res.send(
        'Hello from server 3000'
    )
})

app.post('/massage', (req, res) => {
    console.log(req.body);
    res.status(200).send({"message": "Data received"})
})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000')
})