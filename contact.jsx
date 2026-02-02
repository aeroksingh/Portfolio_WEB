    import nodemailer from "nodemailer";

    export async function sendMail(req, res) {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio message from ${name}`,
        text: message,
    });

    res.json({ success: true });
    }
