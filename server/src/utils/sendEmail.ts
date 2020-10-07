import nodemailer from "nodemailer";

export async function sendEmail(to: string, text: string) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "g2uy7zc63d2a2kov@ethereal.email", // generated ethereal user
      pass: "c7tmydadtQYwArmRCd", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Anonymous Diary" <noreply@anonymousdiary.com>', // sender address
    to: to, // list of receivers
    subject: "Change Password", // Subject line
    html: text,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
