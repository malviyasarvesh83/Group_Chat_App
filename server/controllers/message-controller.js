const Message = require('../models/message');

exports.postMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;
        const name = req.user.name;
        const response = await Message.create({
            message: message,
            name: name,
            userId: userId,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Post Message Api' });
    }
}

exports.getMessages = async (req, res) => {
    try {
        const response = await Message.findAll();
        res.status(200).json({ response });
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Message Api' });
    }
}