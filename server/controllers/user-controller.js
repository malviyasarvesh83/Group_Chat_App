const User = require('../models/user');

exports.signUp = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const response = await User.create({
            name: name,
            email: email,
            phone: phone,
            password: password,
        });
        res.status(201).json({ response, success: 'User Created Successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error while Calling Sign Up Api' });
    }
}