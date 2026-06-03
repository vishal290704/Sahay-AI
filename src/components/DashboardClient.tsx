"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
function DashboardClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight"
          onClick={()=>navigate.push("/")}
          >
            Sahay <span className="text-zinc-400">AI</span>
          </div>
          <button className="px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition">Embed ChatBot</button>
        </div>
      </motion.div>
      {/* Input Bar */}
      <div className="flex justify-center px-4 py-14 mt-20">
        <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10"
        >
            <div className="mb-10">
                <h1 className="text-2xl font-semibold">ChatBot Settings</h1>
                <p className="text-zinc-500 mt-1">Manage your AI chatbot knowledge and business details</p>
            </div>
            <div className="mb-10">
                <h1 className="text-lg font-medium mb-4">Business Details</h1>
                <div className="space-y-4">
                    <input type="text" className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm 
                    focus:outline-none focus:ring-1 focus:ring-black/80" placeholder="Business Name" />

                    <input type="text" className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm
                     focus:outline-none focus:ring-1 focus:ring-black/80" placeholder="Support Email"  />
                </div>
            </div>

            
             <div className="mb-10">
                <h1 className="text-lg font-medium mb-4">Knowledge</h1>
                <div className="space-y-4">
                   <textarea
  className="w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm
  focus:outline-none focus:ring-1 focus:ring-black/80
  placeholder:text-zinc-400"
  placeholder={`Example Knowledge Base:

• Refund Policy: Customers can request returns within 7 days of delivery
• Delivery Time: Orders are delivered within 3–5 business days
• Cash on Delivery: Available for eligible locations
• Support Hours: Monday–Saturday, 9:00 AM – 6:00 PM
• Contact Email: support@company.com`}
/>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DashboardClient;
