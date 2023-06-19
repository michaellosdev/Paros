import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email, subject, messageBody } = request.json();

  const message = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: subject,
    text: messageBody,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_EMAIL,
      pass: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_PASSWORD,
    },
  });

  try {
    await transporter.sendMail(message);

    return new Response("Email sent", { status: 200 });
  } catch (error) {
    return new Response("Error sending email", { status: 500 });
  }
};

// export const GET = async (request) => {
//   return new Response(JSON.stringify({ message: "Hello world" }));
// };
