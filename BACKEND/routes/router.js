const express = require('express');
const router = express.Router();

const {insertNewMessage , getAllMessages ,updateMessageById , deleteMessagById} = require('../Controller/Ni_ChatController');
const {addMessageHistory , getHistoryByUsernames , getHistoryBySender} = require('../Controller/Ni_ChatHistoryController')

//Messaging routes
router.post("/message/insertNewMessage",insertNewMessage);
router.post("/message/getAllMessages",getAllMessages);
router.put("/message/updateMessageById/:id",updateMessageById);
router.delete("/message/deleteMessagById/:id",deleteMessagById);

//Messaging Hisory routes
router.post("/messageHistory/addMessageHistory",addMessageHistory);
router.post("/messageHistory/getHistoryByUsernames",getHistoryByUsernames);
router.post("/messageHistory/getHistoryBySender",getHistoryBySender);



module.exports = router