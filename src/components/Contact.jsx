import React from 'react';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact({ basePath = '/' }) {
  const normalizedBasePath = basePath.startsWith('/') ? basePath : `/${basePath}`;
  const cleanBasePath = normalizedBasePath.replace(/\/+$/, '');
  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-[Playfair Display] text-yellow-400 mb-6" data-aos="fade-up">Hubungi Kami</h1>
        <p className="text-sm sm:text-base text-gray-200 mb-6" data-aos="fade-up" data-aos-delay="100">Segera hubungi kami untuk konsultasi atau pemesanan layanan.</p>
        <div className="flex flex-col items-start gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
          <a href="mailto:support@kitajoki.in" className="flex items-center w-full sm:w-80 bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base font-[Inter]">
            <FaEnvelope className="w-5 h-5 mr-3 text-yellow-400" />
            support@kitajoki.in
          </a>
          <a href="https://www.instagram.com/kitajoki_in" className="flex items-center w-full sm:w-80 bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base font-[Inter]" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5 mr-3 text-yellow-400" />
            kitajoki_in
          </a>
          <a href="https://wa.me/6285183388419" className="flex items-center w-full sm:w-80 bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base font-[Inter]" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-5 h-5 mr-3 text-yellow-400" />
            +62 851-8338-8419
          </a>
        </div>
        <a href={`${cleanBasePath}/`} className="inline-block bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-sm sm:text-base font-[Inter]" data-aos="fade-up" data-aos-delay="300">Kembali ke Beranda</a>
      </div>
    </section>
  );
}