const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const { Pool } = require('pg');



//start server

app.listen(port, () =>  {
    console.log(`Listening to port ${port}`)
})