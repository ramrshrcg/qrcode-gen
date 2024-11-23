const express= require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./server/router');

const app= express()
app.use(bodyParser.json());
app.use(cors());
app.use(router)





app.listen(4000,()=>
{
    console.log("server is running on port 3000")
})

