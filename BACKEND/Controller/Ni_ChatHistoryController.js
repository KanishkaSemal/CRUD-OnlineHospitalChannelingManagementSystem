const ChatHistory = require('../models/Ni_ChatHistoryModel');

const addMessageHistory = async (req, res) => {
    const newMessage = new ChatHistory(req.body);

    newMessage.save((err) => {
        if (err) {
            return res.status(400).json({ error: err.message, status: false });
        }

        return res.status(200).json({
            message: "Message history data successfully inserted!",
            status: true
        });
    });
};

const getHistoryByUsernames = async (req, res) => {
    const { personOne, personTwo } = req.body;

    ChatHistory.find({ personOne: personOne, personTwo: personTwo }, (err, messages) => {
        if (err) {
            return res.status(400).json({ error: err.message, status: false });
        }

        if (messages.length > 0) {
            return res.status(200).json({ message: "Messages found.", data: messages, status: true });
        } else {
            return res.status(200).json({ error: "No messages found.", status: false });
        }
    });
};

const getHistoryBySender = async (req, res) => {
    const { personOne } = req.body;

    ChatHistory.find({
        "$or": [{
            "personOne": personOne
        }, {
            "personTwo": personOne
        }]
    }, (err, messages) => {
        if (err) {
            return res.status(400).json({ error: err.message, status: false });
        }

        if (messages.length > 0) {
            return res.status(200).json({ message: "Messages found.", data: messages, status: true });
        } else {
            return res.status(404).json({ error: "No messages found.", status: false });
        }
    });
};

module.exports = {
    addMessageHistory,
    getHistoryByUsernames,
    getHistoryBySender
};
