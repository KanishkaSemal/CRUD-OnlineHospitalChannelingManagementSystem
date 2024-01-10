const message = require('../models/Ni_ChatModel');

/* Post message */

const insertNewMessage = async (req, res) => {
    let newMessage = new message(req.body);

    try {
        await newMessage.save();
        return res.status(200).json({
            message: "Message created successfully.",
            status: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong while creating the message.",
            status: false
        });
    }
}



/* Get  message */
const getAllMessages = async (req, res) => {
    try {
        const { staffId, adminId, doctorId } = req.body;
        const messages = await message.find({ staffId: staffId, adminId: adminId, doctorId: doctorId });

        if (messages.length > 0) {
            return res.status(200).json({ status: true, message: "Messages retrieved successfully", data: messages });
        } else {
            return res.status(200).json({ status: false, message: "No messages found for the specified staff and student" });
        }
    } catch (err) {
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
}


const updateMessageById = async (req, res) => {
    message.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },

    ).then(() => {
        res.status(200).send({ status: true, statusmsg: "message updated" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: false, statusmsg: "error with updating data" });

    })
}


const deleteMessagById = async (req, res) => {

    message.findByIdAndDelete(
        req.params.id
    ).then(() => {
        res.status(200).send({ status: true, statusmsg: "user deleted" });
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ status: false, statusmsg: "error with deleting data" });

    })

}





module.exports = {
    insertNewMessage,
    getAllMessages,
    updateMessageById,
    deleteMessagById

}