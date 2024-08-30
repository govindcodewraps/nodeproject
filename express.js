const express = require('express');
const app = express();

app.get('', (req, resp) => {
    console.log("data sent by client", req.query.name);
    resp.send('hello, this is home page ' + req.query.name);
});

app.get('/about', (req, resp) => {
    resp.send('Hello, This is About Page');
});

app.get('/detail', (req, resp) => {
    resp.send('Hello, This is Details Page');
    console.warn("details page");
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
