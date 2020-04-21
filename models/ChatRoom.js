const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  participant: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
});

module.exports = ChatRoom = mongoose.model("chatroom", UserSchema);
