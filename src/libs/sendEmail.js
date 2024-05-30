const nodemailer = require("nodemailer");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const WelcomeEmail = require("../emails/welcome").default;
const FollowUpEmail = require("../emails/followUp").default;
const DatoCurioso = require("../emails/datocurioso").default;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, subject, type = "welcome") => {
  let htmlContent;

  if (type === "welcome") {
    htmlContent = ReactDOMServer.renderToStaticMarkup(<WelcomeEmail />);
  } else if (type === "followUp") {
    htmlContent = ReactDOMServer.renderToStaticMarkup(<FollowUpEmail />);
  } else if (type === "custom") {
    htmlContent = ReactDOMServer.renderToStaticMarkup(<DatoCurioso />);
  }

  const mailOptions = {
    from: "pocketsolarsystem@gmail.com",
    to,
    subject,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
