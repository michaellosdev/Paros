import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, messageBody, fullName, phoneNum } = await request.json();

  const message = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: fullName,
    text: `Name: ${fullName}\nPhone: ${phoneNum} \nEmail: ${email}\nMessage: ${messageBody}`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_EMAIL,
      pass: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_PASSWORD,
    },
  });

  try {
    // console.log(message);
    await transporter.sendMail(message);

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Email failed to send" });
  }
}

// export const GET = async (request) => {
//   return new Response(JSON.stringify({ message: "Hello world" }));
// };
