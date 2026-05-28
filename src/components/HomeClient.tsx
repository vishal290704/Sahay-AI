"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
function HomeClient({
  email,
  firstName,
}: {
  email: string;
  firstName: string;
}) {
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };
  const firstLetter = email ? email[0].toUpperCase() : "";
  // const firstNamePart = firstName
  //   ? firstName
  //   : "";
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            Sahay <span className="text-zinc-400">AI</span>
          </div>
          {email ? (
            <div className="">
              <button
                className="w-10 h-10 rounded-full bg-black text-white flex items-center 
            justify-center font-semibold hover:scalle-105 transition"
                onClick={() => setOpen(true)}
              >
                {firstLetter}
              </button>
              {open && (
                <motion.div
                  className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border
                 border-zinc-200 overflow-hidden"
                ></motion.div>
              )}
            </div>
          ) : (
            <button
              className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium
                 hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default HomeClient;

//handle login function isiliye banaye h taki jab user login button dabaye wo login api pe chle jaye
