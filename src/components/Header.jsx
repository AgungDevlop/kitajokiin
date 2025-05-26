import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.8, y: -100 },
    open: { opacity: 1, scale: 1, y: 0 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-black text-white p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl sm:text-3xl font-[Playfair Display] text-yellow-400"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          KitaJoki.in
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          <motion.a
            href="/"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/services"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Services
          </motion.a>
          <motion.a
            href="/about"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            About
          </motion.a>
          <motion.a
            href="/contact"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay dan Menu Pop-up */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Pop-up di pojok kanan atas dengan sedikit jarak */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-4 right-4 w-48 bg-black text-white p-4 rounded-lg shadow-lg z-50 md:hidden"
            >
              <button
                className="absolute top-2 right-2 text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="mt-4">
                <a href="/" className="block py-1 px-2 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300">Home</a>
                <a href="/services" className="block py-1 px-2 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300">Services</a>
                <a href="/about" className="block py-1 px-2 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300">About</a>
                <a href="/contact" className="block py-1 px-2 text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300">Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}