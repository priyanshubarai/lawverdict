"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { supabase } from "../lib/supabaseClient";
import { redirect, useRouter } from "next/navigation";

const AddPhone = () => {
  const { user } = useUser() || {};
  const email = user?.email;
  const name = user?.name;
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    // e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/add-phone", {
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
    } catch (err) {
      console.error("Network or fetch error", err);
    } finally {
      setLoading(false);
      // Redirect to profile after successful submission
      // router.push("/profile");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
        <div className="mb-5">
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_phone"
              id="floating_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Phone number (123-456-7890)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPhone;
