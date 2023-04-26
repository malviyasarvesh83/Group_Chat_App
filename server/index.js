const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const sequelize = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const groupRoutes = require('./routes/groupRoutes');
const Message = require('./models/message');
const User = require('./models/user');
const Group = require('./models/group');

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
        await sequelize.sync({force:true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error While Connecting Database:',error.message);
    }
}

// Relation Between User And Message And Group

User.hasMany(Message);
Message.belongsTo(User);
Group.hasMany(Message);
Message.hasMany(Group);
Group.hasMany(User);
User.belongsTo(Group);

// Routes

app.use('/user', userRoutes);
app.use('/message', messageRoutes);
app.use('/group', groupRoutes);