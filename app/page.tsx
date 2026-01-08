import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Math Problem Templates
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg animate-slide-up">
          Select a template to view solved problems
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Template 1 */}
          <div className="math-box animate-slide-right">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Template 1</h2>
            <p className="text-gray-700 mb-6">Trigonometry & Pythagorean Triplet</p>
            <div className="space-y-4">
              <Link 
                href="/template1/problem1"
                className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Problem 1: Pythagorean Theorem
              </Link>
              <Link 
                href="/template1/problem2"
                className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Problem 2: Trigonometric Ratios
              </Link>
            </div>
          </div>

          {/* Template 2 */}
          <div className="math-box animate-slide-right" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold mb-4 text-purple-700">Template 2</h2>
            <p className="text-gray-700 mb-6">Compound Interest & Interest-based Questions</p>
            <div className="space-y-4">
              <Link 
                href="/template2/problem1"
                className="block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Problem 1: Find Rate (Given Amount)
              </Link>
              <Link 
                href="/template2/problem2"
                className="block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Problem 2: Find Amount (Given Rate)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
