import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PostArticle({ post }) {
  if (!post) {
    return <div className="text-center text-gray-200 py-8">Post not found</div>;
  }

  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/kitajokiin"
          className="inline-block text-yellow-400 hover:text-yellow-500 mb-6 text-sm sm:text-base font-[Inter] transition-colors duration-300"
          data-aos="fade-right"
        >
          ← Kembali ke Beranda
        </a>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-[Playfair Display] text-yellow-400 mb-4"
            data-aos="fade-up"
          >
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <p
            className="text-xs sm:text-sm text-gray-400 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {post.date}
          </p>
          <p
            className="text-sm sm:text-base text-gray-200 mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {post.description}
          </p>
          <div
            className="prose prose-invert text-gray-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl sm:text-2xl font-[Playfair Display] text-yellow-400 mb-4">
                    {children}
                  </h2>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 mb-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-200">{children}</li>
                ),
                p: ({ children }) => (
                  <p className="text-gray-200 mb-4">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="text-yellow-400">{children}</strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
            <p className="mt-6">
              Hubungi kami sekarang untuk informasi lebih lanjut atau untuk memesan layanan ini!
            </p>
          </div>
          <a
            href="/kitajokiin/contact"
            className="inline-block bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-sm sm:text-base font-[Inter] mt-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}