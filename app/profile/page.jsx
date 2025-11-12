"use client";

import React, { useState, useEffect } from "react";
import Profile from "../../components/Profile";
import Sessions from "../../components/Sessions";
import { redirect } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0";
import { getUserByEmail } from "../../lib/model";
import AddPhone from "../../components/AddPhone";

const ProfilePage = () => {
  const { user, error, isLoading } = useUser();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    if (!user && !isLoading) {
      redirect("/auth/login?returnTo=/profile");
    }
    const fetchPhone = async () => {
      const data = await getUserByEmail(user.email);
      // console.log(`data : ${JSON.stringify(data, null, 2)}`)
      if (data?.data?.phone) {
        setPhone(data.data.phone);
        console.log(`Phone no fetched: ${data.data.phone}`);
      } else {
        console.log("no phone found");
      }
    };
    if(user) fetchPhone();
  }, [user,phone,ProfilePage]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {phone ? (
        <div className="flex h-screen flex-row justify-center gap-12 bg-white p-12 dark:bg-gray-900">
          <Profile phone={phone} />
          <Sessions />
        </div>
      ) : (
        <div className="h-screen bg-white p-12 dark:bg-gray-900">
          <AddPhone />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
