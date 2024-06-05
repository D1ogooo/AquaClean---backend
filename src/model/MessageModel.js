const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
 email: {
  type: String,
  require: true,
 },
 mensagem: {
  type: String,
  require: true,
 },
 createdAt: {
  type: Date,
  default: new Date(),
 }
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message