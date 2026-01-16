// import express library by requiring it
const express = require('express');

// add Node.js path module
const path = require('path');

// create an instance of an express application
const app = express();

// define the port for the server
const port = 3001;

// create routes and link to static files manually
app.get("/", (req, res) => {
    // send this when visiting the root path of the server and show index.html at this root path
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public/contact.html"));
})

// Port Listener
app.listen(port, () => {
    console.log(`Server is running at: ${port}`)
})