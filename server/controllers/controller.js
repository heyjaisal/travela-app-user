const jwt = require('jsonwebtoken');
const User = require('../models/profile')
const Otp = require('../models/otp');
const bcrypt = require('bcrypt');
const { transporter } = require('../config/nodemailer');
require('dotenv').config();

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
  console.log(email);
  
  const otp = generateOtp();

  try {
    await Otp.deleteMany({ email });

    await Otp.create({ email, otp });

    await transporter.sendMail({
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    });

    res.json({ message: "OTP Sent Successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ error: "Error sending OTP" });
  }
};


exports.verifyOtp = async (req, res) => {
    const { name, email, password, country, otp } = req.body;
    console.log(req.body);
  
    try {
      const otpDoc = await Otp.findOne({ email, otp });
  
      if (!otpDoc) {
        return res.status(400).json({ error: "Invalid OTP" });
      }
  
      // Check if OTP is expired (more than 5 minutes old)
      const otpAge = (new Date() - otpDoc.createdAt) / 1000 / 60; // Age in minutes
      if (otpAge > 5) {
        return res.status(400).json({ error: "Expired OTP" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      await User.create({ name, email, password: hashedPassword, country, role: 'user', verified: true });
  
      await Otp.deleteOne({ email });
  
      res.status(201).json({ message: "Signup Successful" });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ error: "Error verifying OTP" });
    }
  };
  
  exports.userlogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        // Await the user query to get the actual user object
        const user = await User.findOne({ email, role: 'user' });
        if (!user) {
            return res.status(400).json({ error: 'email not found' });
        }

        // Check if the password is valid
        const passvalid = await bcrypt.compare(password, user.password);
        if (!passvalid) {
            return res.status(400).json({ error: 'invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                user: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            }
        );

        res.status(200).json({
            message: 'login successful',
            token,
            user: { name: user.name, email: user.email, country: user.country },
        });
    } catch (error) {
        console.error('error logging in', error);
        res.status(400).json({ error: 'error logging in' });
    }
};
