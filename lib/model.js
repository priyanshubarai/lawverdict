import { supabase } from "./supabaseClient";

export async function getUserByEmail(email) {
  const res = await fetch(
    `/api/contacts?email=${encodeURIComponent(email)}`,
    {
      method: "GET",
    },
  );
  let data = null
  if (!res.ok) {
    console.log("Not Found : ",email);
  } else {
    data = await res.json();
    console.log("Success:", data);
  }
  return data;
}

export async function addPhoneModel(email, name, phone) {
  const res = await fetch("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, phone }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch (err) {
    console.warn("Failed to parse JSON response from /api/add-phone", err);
  }

  if (!res.ok) {
    console.error("Server error", res.status, data);
  } else {
    console.log("Success:", data);
  }
  return data;
}
