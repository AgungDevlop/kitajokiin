import React from 'react';

const Banner = () => {
  const headingText = "K I T A  J O K I  J A S A";
  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 min-h-32 sm:min-h-48 lg:min-h-64 flex flex-col justify-center text-left" data-aos="fade-in">
        <h1
          className="text-2xl sm:text-4xl lg:text-5xl font-[Bebas Neue] font-bold tracking-wide whitespace-pre mb-2 sm:mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {headingText.split('').map((letter, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p
          className="text-sm sm:text-base lg:text-lg font-[Inter] text-gray-400 max-w-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Penyedia jasa profesional untuk website, aplikasi, desain grafis, dan solusi teknologi.
        </p>
      </div>
      <style jsx>{`
        .animated-letter {
          animation: colorChange 8s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes colorChange {
          0% { color: #FBBF24; }
          20% { color: #FFFFFF; }
          40% { color: #D1D5DB; }
          60% { color: #60A5FA; }
          80% { color: #F59E0B; }
          100% { color: #93C5FD; }
        }
      `}</style>
    </section>
  );
};

export default Banner;