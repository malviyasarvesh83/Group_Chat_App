const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Group = sequelize.define('group', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdBy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    groupName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Group;