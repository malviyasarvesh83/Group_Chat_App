const Group = require('../models/group');

exports.createGroup = async (req, res) => {
    try {
        const { name, member, groupName } = req.body;
        const response = await Group.create({
            name: member,
            createdBy: name,
            groupName: groupName,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Create Group Api' });
    }
}

exports.getGroups = async (req, res) => {
    try {
        const response = await Group.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Group Api' });
    }
}