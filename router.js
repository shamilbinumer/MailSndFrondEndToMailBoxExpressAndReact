import { Router } from "express";
import nodemailer from "nodemailer";
import { google } from "googleapis";

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

router.post("/send", (req, res) => {
    const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send("Email sent successfully");
    });
});

export default router;
