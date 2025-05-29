const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const nodemailer = require("nodemailer");

// email config
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "hemilpatel0195@gmail.com",
        pass: "bqboqatlpmalngps"
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000
});

router.post("/register", async (req, res) => {
    const { fname, lname, email, mobile, message } = req.body;

    try {
        if (!fname || !lname || !email || !mobile) {
            return res.status(422).json({ error: "Please fill all required fields" });
        }

        const newUser = new User({
            fname,
            lname,
            email,
            mobile,
            messages: message ? [message] : []
        });

        await newUser.save();

        const mailOptions = {
            from: "hemilpatel0195@gmail.com",
            to: "hemilpatel0195@gmail.com",
            subject: "New Contact Message from Portfolio",
            text: `
New Message from Contact Page:

Name: ${fname} ${lname}
Email: ${email}
Mobile: ${mobile}
Message: ${message || 'No message'}
            `
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", info.response);
            res.status(201).json({ 
                status: 201, 
                message: "Message stored and email sent successfully",
                emailInfo: info.response 
            });
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            // Still return success for database storage but indicate email failed
            res.status(201).json({ 
                status: 201, 
                message: "Message stored successfully but email failed to send",
                emailError: emailError.message 
            });
        }

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
