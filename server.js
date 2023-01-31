//start with server template
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());

const pool = new Pool ({
        host: 'localhost',
        port: 5432,
        password: '',
        database: 'food'
});

pool.connect();


//crud select all
app.get("/food", async (req, res) => {
    try {
        let dbString = `SELECT * FROM food`
        let {rows} = await pool.query(dbString);
        res.send(rows)
    } catch (err)  {
        console.error(err.message)
    }
})
//read one

app.get('/food/:id', async (req,res) => {
    try {
       const {id} = req.params;
       const {rows} = await pool.query('SELECT * FROM food WHERE id = $1', [id])
       res.json(rows)
    } catch (error) {
        console.error(error.message)
    }
})

//update

app.put('/food/:id', async(req,res)=> {
    try {
        const {id} = req.params; 
        const {food_name, carbs, fats, protein, calories} = req.body;
        await pool.query('UPDATE food SET food_name = $1, carbs = $2, fats = $3, protein = $4, calories = $5 WHERE id = $6', [food_name, carbs, fats, protein, calories, id]);
        res.json('Updated food where ID is ' + id)
    } catch (error) {
        console.error(error.message)
    }
})
//delete
app.delete('/food/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM food WHERE id = $1", [id])
        res.send('Deleted')
    } catch (error) {
        console.error(err.message)
    }
})
//create

app.post('/food', async(req,res) => {
    try {
        const {carbs, fats, protein, calories} = req.body;
        const foodName = req.body.food_name
         await pool.query('INSERT INTO food (food_name, carbs, fats, protein, calories) VALUES ($1, $2, $3, $4, $5)', [foodName, carbs, fats, protein, calories])
        res.json('Added')
    } catch (error) {
        console.error(error)
    }
})
//start server

app.listen(port, () =>  {
    console.log(`Listening to port ${port}`)
})