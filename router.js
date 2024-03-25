import { Router } from "express";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import schedule from 'node-schedule';

const router = Router();

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "28897710045-828glrdoaotip2k291b2rqi4cj43cn4u.apps.googleusercontent.com",
    "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",
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1//04Tpjxn1UJQzlCgYIARAAGAQSNwF-L9Ir-HHoPoszK_RcozH0PZX7rew3KzwU40ZEJBRyJ2Q12Y4rIhaUcjSfkRjKQWUdX04A0f0"
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        type: "OAuth2",
        user: "shamilmohd418@gmail.com",
        clientId: "28897710045-828glrdoaotip2k291b2rqi4cj43cn4u.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//04Tpjxn1UJQzlCgYIARAAGAQSNwF-L9Ir-HHoPoszK_RcozH0PZX7rew3KzwU40ZEJBRyJ2Q12Y4rIhaUcjSfkRjKQWUdX04A0f0",
        accessToken: accessToken
    }
});

// Schedule email to be sent at 3:00 PM daily
const job = schedule.scheduleJob({ hour: 15, minute: 21 }, function () {
    const mailOptions = {
        from: "shamilmohd418@gmail.com", // Change this to your email
        to: "mohammedshamil596@gmail.com", // Change this to recipient's email
        subject: "Scheduled Email",
        html: "<h1>Hellow Shamil</h1>"
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });
});

router.get("/sended", (req, res) => {
    res.send("Email scheduled successfully.");
});

export default router;
