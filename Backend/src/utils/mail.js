import { Resend } from "resend";
import { ApiError } from "./ApiError.js";

const resend = new Resend(process.env.RESEND_KEY);


async function sendVerifyMail(name, email, token) {
	const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en" style="margin: 0; padding: 0;">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Verify Your Email</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f7;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
          }
          .header h1 {
            color: #333;
            margin: 0;
          }
          .content {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
          }
          .token-box {
            background: #f1f1f1;
            padding: 12px;
            margin: 20px 0;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            letter-spacing: 2px;
            color: #111;
            border-radius: 6px;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #aaa;
            margin-top: 40px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Verify Your Email</h1>
          </div>
          <div class="content">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for signing up for <strong>LeetLab</strong>. Please use the link below to verify your email address:</p>
            <div class="token-box"><a href="${
							process.env.BASE_URl
						}/api/v1/auth/verify/${token}">Verify Email</a></div>
            <p>This token will expire in 20 minutes. If you did not request this, please ignore this email.</p>
            <p>Thanks,<br />The LeetLab Team</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} LeetLab. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

	const options = {
		from: process.env.RESEND_EMAIL,
		to: email, // list of receivers
		subject: "Verify your mail",
		text: `Plase click on below like to verify your email: ${process.env.BASE_URl}/api/v1/auth/verify/${token}`,
		html: htmlTemplate,
	};

	const { data, error } = await resend.emails.send(options);

	if (error) {
		throw new ApiError(400, error.message, error);
	}

	return data;
}

async function sendForgotPasswordMail(name, email, token) {
	const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en" style="margin: 0; padding: 0;">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Change your Password</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f7;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
          }
          .header h1 {
            color: #333;
            margin: 0;
          }
          .content {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
          }
          .token-box {
            background: #f1f1f1;
            padding: 12px;
            margin: 20px 0;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            letter-spacing: 2px;
            color: #111;
            border-radius: 6px;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #aaa;
            margin-top: 40px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Change Your Password</h1>
          </div>
          <div class="content">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Please use the link below to change your password for LeetLab:</p>
            <div class="token-box"><a href="${
							process.env.BASE_URl
						}/api/v1/auth/change-password/${token}">Change Password</a></div>
            <p>This token will expire in 20 minutes. If you did not request this, please ignore this email.</p>
            <p>Thanks,<br />The LeetLab Team</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} LeetLab. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

	const options = {
		from: process.env.RESEND_EMAIL,
		to: email, // list of receivers
		subject: "Verify your mail",
		text: `Plase click on below like to verify your email: ${process.env.BASE_URl}/api/v1/auth/change-password/${token}`,
		html: htmlTemplate,
	};

	const { data, error } = await resend.emails.send(options);

	if (error) {
		throw new ApiError(400, error.message, error);
	}

	return data;
}

export { sendVerifyMail, sendForgotPasswordMail };
