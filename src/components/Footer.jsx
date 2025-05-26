import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="bg-black text-yellow-400 p-4 text-center border-t border-yellow-400"
    >
      <motion.p
        className="text-sm font-sans"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        © 2025 <span className="text-white">KitaJoki.in</span>. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}