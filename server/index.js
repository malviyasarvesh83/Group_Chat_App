const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const sequelize = require('./utils/database');
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is successfully running on port: http://localhost:${port}`);
    database();
})

// Database Connection

const database = async () => {
    try {
        await sequelize.sync();
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error While Connecting Database:',error.message);
    }
}

// Routes

app.use('/user', userRoutes);