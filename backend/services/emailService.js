const Email = require('../models/Email');

// Get all emails
exports.getAllEmails = async () => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    return emails;
  } catch (error) {
    console.error('Error getting emails:', error);
    throw new Error('Failed to get emails');
  }
};

// Create a new email
exports.createEmail = async (from, to, subject, body) => {
  try {
    const newEmail = new Email({
      from,
      to,
      subject,
      body
    });

    await newEmail.save();

    return newEmail;
  } catch (error) {
    console.error('Error creating email:', error);
    throw new Error('Failed to create email');
  }
};
