const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to CI/CD demo 123')
});


app.get('/products', (req, res) => {
    res.send([{
        name: "Prod 1"
    }, {
        name: "Prod 2"
    }])
});

app.listen(port, () => {
    console.log("connected to the server")
})