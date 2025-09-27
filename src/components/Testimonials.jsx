function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-blue-50 dark:bg-gray-900 py-16 px-4 text-center transition-colors duration-500 ease-in-out"
    >
      <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-500 ease-in-out">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "Amazing experience! I improved my band score from 6.0 to 7.5 in just 2 months."
          </p>
          <h4 className="font-semibold">- Priya Sharma</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-500 ease-in-out">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "The mock tests and AI feedback really helped me prepare effectively."
          </p>
          <h4 className="font-semibold">- Raj Verma</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-500 ease-in-out">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            "The mentors are very supportive and the speaking practice sessions boosted my confidence."
          </p>
          <h4 className="font-semibold">- Ananya Gupta</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
