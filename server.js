
const express = require('express')
const app = express();
const port = 3000;


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`server listening at  http://localhost:${port}`)
})

/* example of route & endpoints
const express = require('express');

const app = express();
const port = 3000;

app.get('/now', (request, response) => {
    const date = new Date();
    response.send(date);
})

app.listen(port, () => {
    console.log(`Your server is listening on port http://localhost:${port}/now`);
})
*/