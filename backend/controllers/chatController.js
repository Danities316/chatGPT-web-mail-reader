const Chat = require('../modals/Chat');

// Get all chat messages
exports.getAllChatMessages = async (req, res) => {
  try {
    const chatMessages = await Chat.find().sort({ createdAt: 1 });
    res.status(200).json(chatMessages);
  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new chat message
exports.createChatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    // Create a new chat message
    const newChatMessage = new Chat({
      message
    });

    // Save the chat message to the database
    await newChatMessage.save();

    res.status(201).json({ message: 'Chat message created successfully' });
  } catch (error) {
    console.error('Error creating chat message:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
