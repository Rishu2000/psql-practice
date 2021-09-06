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

app.get("/api/v1/restaurants/:id", async (req,res) => {
    const results = await db.query('SELECT * FROM restaurants WHERE id = $1',[req.params.id]);
    res.json({
        status:"success",
        data:results.rows[0],
        id:req.params.id
    })
})

app.post("/api/v1/restaurants", async (req,res) => {
    const {name, location, price_range} = req.body;
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2,$3) returning *;",[name, location, price_range]);
    res.json({
        status:"success",
        data:results.rows[0]
    })
})

app.put("/api/v1/restaurants/:id", async (req,res) => {
    const {name, location, price_range} = req.body;
    const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *;",[name, location, price_range, req.params.id]);
    res.json({
        status:"success",
        data:results.rows[0]
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