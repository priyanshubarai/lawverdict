import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log("email received in backend : ", email);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message || "Fetch failed" },
        { status: 500 },
      );
    }
    console.log("data Fetched successfully:");
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Error in /api/get-contact:", err);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}

export async function POST(req:NextResponse) {
  const { email, name, phone } = await req.json();
  try {
    console.log("POST :", { email, name, phone });

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
