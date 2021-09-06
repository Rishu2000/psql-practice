const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
const db = require('./db/index');
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(morgan('dev'));

app.get("/api/v1/restaurants", async (req,res) => {
    const results = await db.query('SELECT * FROM restaurants;');
    res.json({
        status:"success",
        data:{
            databaseResult: results.rows,
            restaurants:["Dimino's", "Pizza hut"]
        }
    })
});

app.get("/api/v1/restaurants/:id",(req,res) => {
    res.json({
        status:"success",
        data:"wait working on it.",
        id:req.params.id
    })
})

app.post("/api/v1/restaurants",(req,res) => {
    res.json({
        status:"success",
        data:req.body
    })
})

app.put("/api/v1/restaurants/:id",(req,res) => {
    res.json({
        id: req.params.id,
        body: req.body
    });
})

app.delete("/api/v1/restaurants/:id",(req,res) => {
    res.json({
        status:"success"
    })
})

app.listen(port, () => {
    console.log('server is listen to the port = ' + port);
});