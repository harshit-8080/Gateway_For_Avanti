const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const bodyParser = require("body-parser");


const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/customer", proxy("http://localhost:7001"));
app.use("/product", proxy("http://localhost:7002"));
app.use("/shopping", proxy("http://localhost:7003"));



app.listen(3000,()=>{
    console.log("server started at 3000");
})