//import express from "express";

const app = require('express')();

app.get('/', (req, res) =>{
  res.send('<h1>Hello world</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});