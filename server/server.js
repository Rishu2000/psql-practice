const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4001;

app.get("/api/v1/restaurants", (req,res) => {
    res.json({
        status:"success",
        data:{
            restaurants:["Dimino's", "Pizza hut"]
        }
    })
});

app.listen(port, () => {
    console.log('server is listen to the port = ' + port);
});