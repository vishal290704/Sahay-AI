'use client'
import React from 'react'
import { motion } from 'motion/react' 
function HomeClient() {
  return (
    <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden'>
        <motion.div
        className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
        >
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                <div className='text-lg font-semibold tracking-tight'>
                    Sahay <span className='text-zinc-400'>AI</span>
                </div>
                <motion.button>Login</motion.button>
            </div>
        </motion.div>
    </div>
  )
}

export default HomeClient
