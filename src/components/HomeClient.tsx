"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";
import axios from "axios";
import { useRouter } from "next/navigation";
function HomeClient({
  email,
  firstName,
}: {
  email: string;
  firstName: string;
}) {
  const handleLogin = () => {
    setLoading(true)
    window.location.href = "/api/auth/login";
  };
  const firstLetter = email ? email[0].toUpperCase() : "";
  // const firstNamePart = firstName
  //   ? firstName
  //   : "";
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navigate = useRouter()
  const features = [
    {
      title: "Plug & Play",
      desc: "Add the chatbot to your site with a single script tag.",
    },
    {
      title: "Admin Controlled",
      desc: "You control exactly what the AI knows and answers.",
    },
    {
      title: "Always online",
      desc: "Your customers get instant support 24/7.",
    },
  ];

  const handleLogout = async ()=>{
    try {
      const result = await axios("/api/auth/logout")
      window.location.href = "/";
    } catch (error) {
      console.log(error)
    }
  }
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
            <div className="relative" ref={popupRef}>
              <button
                className="w-10 h-10 rounded-full bg-black text-white flex items-center 
            justify-center font-semibold hover:scalle-105 transition"
                onClick={() => setOpen(!open)}
              >
                {firstLetter}
              </button>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-xl border
                 border-zinc-200 overflow-hidden"
                  >
                    <button className="w-full text-left px-4 py-3 text-sm hover:bg-zinc-100"
                    onClick={()=>navigate.push("/dashboard")}
                    >
                      Dashboard
                    </button>
                    <button className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-zinc-100"
                    onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button
              className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium
                 hover:bg-zinc-800 transition disabled:opacity-60 flex items-center gap-2"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading?"Loading...":"Login"}
            </button>
          )}
        </div>
      </motion.div>
      <section className="pt-36 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight ">
              AI Customer Support
              <br />
              Built for modern websites
            </h1>
            <p className="mt-6 text-sm text-zinc-600 max-w-xl">
              Add a powerful AI chatbot to your website in minutes. Let your
              customers get instant answers using your own business knowledge.
            </p>

            <div className="flex mt-10 gap-4">
              {email ? (
                <button className="px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-600 transition disabled:opacity-60"
                onClick={()=>navigate.push("/dashboard")}
                >
                  Go to Dashboard
                </button>
              ) : (
                <button
                  className="px-7 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-600 transition disabled:opacity-60"
                  onClick={handleLogin}
                >
                  Get Started
                </button>
              )}

              <a
                href="#feature"
                className="px-7 py-3 rounded-xl border border-zinc-300 text-zinc-700 hover:bg-zinc-200 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-white shadow-2xl border border-zinc-200 p-6">
              <div className="text-sm text-zinc-500 mb-3">
                Live Chat Preview
              </div>
              <div className="space-y-3">
                <div className="bg-black text-white rounded-lg px-4 py-2 text-sm ml-auto w-fit">
                  Do you offer cash on delivery?
                </div>
                <div className="bg-zinc-100 rounded-lg px-4 py-2 text-sm w-fit">
                  Yes, cash on delivery is available.
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl"
              >
                💬
              </motion.div>
              
            </div>
          </motion.div>
          
        </div>
      </section>
      <section
        id="feature"
        className="bg-zinc-50 py-28 px-6 border-t border-zinc-200"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold text-center"
          >
            Why Businesses Choose SahayAI?
          </motion.h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-200"
              >
                <h1 className="text-lg font-medium">{f.title}</h1>
                <p className="mt-3 text-zinc-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-10 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} SahayAI. All rights reserved.
      </footer>
    </div>
  );
}

export default HomeClient;

//handle login function isiliye banaye h taki jab user login button dabaye wo login api pe chle jaye

//useEffect me handler function ka kaam yhi h ki jab Dashboard-Logout wala open ho aur use close krna
// rahe screen pe kahin bhi click krke

//Agar user login nhi hai to "Go to Dashboard" wala button dikhega aur agar login hai to "get Started"
//wala aur isko email ke through hum ternary operator se check krenge


//Live chat preview ke liye new wala code:-

{
{/* <motion.div
  className="relative"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div
    className="
    relative
    rounded-3xl
    border border-zinc-200
    bg-white
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    p-6
    max-w-md
    overflow-hidden
    "
  >
    {/* Header */}
//     <div className="flex items-center justify-between mb-6">
//       <div className="flex items-center gap-3">
//         <div
//           className="
//           h-11 w-11
//           rounded-2xl
//           bg-black
//           text-white
//           flex items-center justify-center
//           font-semibold
//           "
//         >
//           AI
//         </div>

//         <div>
//           <h3 className="font-semibold text-zinc-900">
//             Sahay AI
//           </h3>

//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-green-500"></span>
//             <span className="text-xs text-zinc-500">
//               Online
//             </span>
//           </div>
//         </div>
//       </div>

//       <div
//         className="
//         px-3 py-1
//         rounded-full
//         bg-zinc-100
//         text-zinc-600
//         text-xs
//         "
//       >
//         Live Demo
//       </div>
//     </div>

//     {/* Chat Area */}
//     <div className="space-y-4">
//       {/* User Message */}
//       <div className="flex justify-end">
//         <div className="max-w-[80%]">
//           <div
//             className="
//             bg-black
//             text-white
//             px-4 py-3
//             rounded-2xl rounded-br-md
//             text-sm
//             "
//           >
//             Do you offer cash on delivery?
//           </div>

//           <p className="text-[10px] text-zinc-400 text-right mt-1">
//             10:32 AM
//           </p>
//         </div>
//       </div>

//       {/* AI Message */}
//       <div className="flex gap-3">
//         <div
//           className="
//           h-8 w-8
//           rounded-xl
//           bg-zinc-900
//           text-white
//           flex items-center justify-center
//           text-xs
//           font-medium
//           shrink-0
//           "
//         >
//           AI
//         </div>

//         <div className="max-w-[80%]">
//           <div
//             className="
//             bg-zinc-100
//             border border-zinc-200
//             text-zinc-700
//             px-4 py-3
//             rounded-2xl rounded-bl-md
//             text-sm
//             "
//           >
//             Yes, Cash on Delivery is available for eligible locations. You can confirm availability during checkout.
//           </div>

//           <p className="text-[10px] text-zinc-400 mt-1">
//             10:32 AM
//           </p>
//         </div>
//       </div>

//       {/* Typing Indicator */}
//       <div className="flex gap-3 items-center">
//         <div
//           className="
//           h-8 w-8
//           rounded-xl
//           bg-zinc-900
//           text-white
//           flex items-center justify-center
//           text-xs
//           "
//         >
//           AI
//         </div>

//         <div
//           className="
//           px-4 py-3
//           rounded-2xl
//           bg-zinc-100
//           border border-zinc-200
//           flex gap-1
//           "
//         >
//           <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"></span>
//           <span
//             className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"
//             style={{ animationDelay: "0.15s" }}
//           ></span>
//           <span
//             className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"
//             style={{ animationDelay: "0.3s" }}
//           ></span>
//         </div>
//       </div>
//     </div>

//     {/* Floating Chat Icon */}
//     <motion.div
//       animate={{ y: [0, -8, 0] }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//       }}
//       className="
//       absolute
//       bottom-5
//       right-5
//       h-12 w-12
//       rounded-2xl
//       bg-black
//       text-white
//       flex items-center justify-center
//       shadow-lg
//       "
//     >
//       💬
//     </motion.div>
//   </div>
// </motion.div> */}
}