import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, name, phone } = await req.json();
    console.log("add-phone received:", { email, name, phone });

    return NextResponse.json({
      message: "Received and logged",
      payload: { email, name, phone },
    });
  } catch (err) {
    console.error("Error in /api/add-phone:", err);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
