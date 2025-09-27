function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-center pt-32 pb-20 px-4 transition-colors duration-500 ease-in-out">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achieve Your Dream IELTS Score
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Join the best institute for IELTS preparation with expert mentors.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-500 ease-in-out"
          >
            Get Started
          </a>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/exam-concept-illustration_114360-2754.jpg"
            alt="IELTS Banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
