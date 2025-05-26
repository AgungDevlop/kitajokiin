const Banner = () => {
  const headingText = "K I T A  J O K I  J A S A";

  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-32 sm:h-48 lg:h-64 flex flex-col justify-center text-left" data-aos="fade-in">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-[Bebas Neue] font-bold tracking-normal mb-2 sm:mb-4 whitespace-pre"
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
          className="text-base sm:text-lg lg:text-xl font-[Inter] text-gray-400 max-w-md"
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
          0% { color: #FBBF24; } /* yellow-400 */
          20% { color: #FFFFFF; } /* white */
          40% { color: #D1D5DB; } /* gray-300 */
          60% { color: #60A5FA; } /* soft blue */
          80% { color: #F59E0B; } /* amber-500 */
          100% { color: #93C5FD; } /* blue-300 */
        }
      `}</style>
    </section>
  );
};

export default Banner;