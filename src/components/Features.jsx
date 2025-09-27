function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-colors duration-500 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Speaking Practice</h3>
        <p className="text-gray-600 dark:text-gray-300">Daily speaking sessions to boost your confidence.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-colors duration-500 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">Mock Tests</h3>
        <p className="text-gray-600 dark:text-gray-300">Regular mock tests to evaluate your progress.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-colors duration-500 ease-in-out">
        <h3 className="text-xl font-semibold mb-2">AI Band Score</h3>
        <p className="text-gray-600 dark:text-gray-300">Get instant AI evaluation and feedback on your practice tests.</p>
      </div>
    </section>
  );
}

export default Features;
