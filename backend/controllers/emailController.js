const Email = require('../modals/Email');

// Get all emails
exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    res.status(200).json(emails);
  } catch (error) {
    console.error('Error getting emails:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new email
exports.createEmail = async (req, res) => {
  try {
    const { from, to, subject, body } = req.body;

    // Create a new email
    const newEmail = new Email({
      from,
      to,
      subject,
      body
    });

    // Save the email to the database
    await newEmail.save();

    res.status(201).json({ message: 'Email created successfully' });
  } catch (error) {
    console.error('Error creating email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
