const Chat = require('../models/Chat');

// Get all chat messages
exports.getAllChatMessages = async () => {
  try {
    const chatMessages = await Chat.find().sort({ createdAt: 1 });
    return chatMessages;
  } catch (error) {
    console.error('Error getting chat messages:', error);
    throw new Error('Failed to get chat messages');
  }
};

// Create a new chat message
exports.createChatMessage = async (message) => {
  try {
    const newChatMessage = new Chat({
      message
    });

    await newChatMessage.save();

    return newChatMessage;
  } catch (error) {
    console.error('Error creating chat message:', error);
    throw new Error('Failed to create chat message');
  }
};
