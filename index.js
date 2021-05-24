//import express from "express";

const app = require('express')();

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});