require("./config/config");
require("./models/db");


const express = require ("express");
var app = express ();
const cors = require ('cors');
const rtsIndex = require ("./routes/index.router");
const bodyParser = require ("body-parser");






app.use(cors());
app.use("/api", rtsIndex);
app.use(bodyParser.json());



app.listen(process.env.port, ()=>{console.log (`Server started at port: ${process.env.PORT}`)})