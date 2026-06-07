"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

function EmbedClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter();
  return (
    <div>
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <div className="sticky top-0 z-40 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div
              className="text-lg font-semibold cursor-pointer"
              onClick={() => navigate.push("/")}
            >
              Sahay<span className="text-zinc-400">AI</span>
            </div>
            <button
              className="px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition"
              onClick={() => navigate.push("/dashboard")}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
        <div className="flex justify-center px-4 py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10"
          >
            <h1 className="text-2xl font-semibold mb-2">Embed ChatBot</h1>
            <p>Copy and paste this code before<code>&lt;/body&gt;</code></p>

            <div className="relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10">

            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EmbedClient;
