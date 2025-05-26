import React from 'react';
import { motion } from 'framer-motion';

export default function PostCard({ id, title, image, date, description, slug, basePath = '/' }) {
  // Ensure basePath starts with '/' and doesn't end with '/'
  const normalizedBasePath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  const cleanBasePath = normalizedBasePath.replace(/\/+$/, '');

  // Prefix image path
  const imagePath = image ? `${cleanBasePath}${image.startsWith('/') ? '' : '/'}${image}` : '';

  return (
    <motion.div
      className="bg-black rounded-lg shadow-md border-2 border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/30 relative"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="overflow-hidden rounded-t-lg">
        {imagePath && (
          <img
            src={imagePath}
            alt={title}
            className="w-full h-24 sm:h-32 object-cover"
          />
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <p className="text-xs sm:text-sm text-gray-400 mb-1">{date}</p>
        <h3 className="text-sm sm:text-base font-[Playfair Display] text-yellow-400 mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-200 mb-2 line-clamp-2 sm:line-clamp-3">{description}</p>
      </div>
      <a
        href={`${cleanBasePath}/posts/${slug}`}
        className="absolute bottom-0 left-0 right-0 w-3/4 mx-auto bg-yellow-400 text-black px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border-2 border-yellow-400 transform translate-y-1/2 z-20 hover:bg-yellow-500 transition-colors duration-300 text-xs sm:text-sm font-[Inter] text-center"
      >
        View
      </a>
    </motion.div>
  );
}