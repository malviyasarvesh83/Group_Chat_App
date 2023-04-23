const Message = require('../models/message');

exports.postMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;
        const response = await Message.create({
            message: message,
            userId: userId,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Post Message Api' });
    }
}

exports.getMessages = async (req, res) => {
    try {
        const response = await Message.findAll({where:{userId:req.user.id}});
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Message Api' });
    }
}