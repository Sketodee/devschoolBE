const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const randomNumber = (length) => {
    const min = 10 ** (length - 1);
    const max = 10 ** length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sendEmail = async (recipientEmail) => {
    try {
      // Define email options
      const mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: recipientEmail, // List of recipients
        subject: 'Welcome from Kodexar', // Subject line
        text: 'This is a test email sent from Node.js using nodemailer!', // Plain text body
        // html: '<b>This is a test email sent from Node.js using nodemailer!</b>', // HTML body (optional)
      };
  
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      return true
    } catch (error) {
        return false
      console.log('Error sending email: ', error);
    }
  };

module.exports = {
    randomNumber, 
    sendEmail
}