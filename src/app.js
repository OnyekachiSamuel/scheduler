const express = require("express");
const fs = require("fs");
const routes = require("./routes/index.js");


const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1/', routes);

  
app.listen(port);