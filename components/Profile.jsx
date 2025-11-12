"use client";
import { useUser } from "@auth0/nextjs-auth0";
import React from "react";

const Profile = (props) => {
  const {user} = useUser();

  return (
    <div className="w-1/4">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center p-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={user.picture}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {props.phone}
          </span>
          <div className="mt-4 flex md:mt-6">
            <a
              href="/auth/logout"
              className="ms-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
