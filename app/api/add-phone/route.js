import { NextResponse } from "next/server";
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req) {
  const { email, name, phone } = await req.json();
  const redirectUrl = process.env.APP_BASE_URL || '/';

  try {
    console.log("add-phone received:", { email, name, phone });

    const { data, error } = await supabase
      .from("contacts")
      .insert([{ email, name, phone }]);

    if (error) {
      return NextResponse.json(
        { error: error.message || "Insert failed" },
        { status: 500 },
      );
    }
    console.log("data inserted successfully:");
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Error in /api/add-phone:", err);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
