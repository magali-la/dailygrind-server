// import express library by requiring it
const express = require('express');

// create an instance of an express application
const app = express();

// define the port for the server
const port = 3001;

// import paths
app.get("/", (req, res) => {
    // send this when visiting the root path of the server
    res.send('hi')
})

// Port Listener
app.listen(port, () => {
    console.log(`Server is running at: ${port}`)
})