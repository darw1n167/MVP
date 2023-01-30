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
        user: 'WINDOWS_DWEEZY',
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
        console.error(err.message)
    }
})

//update

app.put('/food/:id', async(req,res)=> {
    try {
        const {id} = req.params; 
        const {name,carbs,fats, proteins, calories} = req.body;
        await pool.query('UPDATE food SET food_name = 1$, carbs = $2, fats = $3, proteins = $4, calories = $5 WHERE id = $6', [name, carbs, fats, proteins, calories, id]);
        res.json('Updated food where ID is ' + id)
    } catch (error) {
        console.error(err.message)
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

//start server

app.listen(port, () =>  {
    console.log(`Listening to port ${port}`)
})