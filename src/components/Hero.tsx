import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 font-semibold text-sm">Hello!</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to
              <span className="block text-blue-600 mt-2">Cumberland High School</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering students to reach their full potential through innovative education,
              dedicated faculty, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-green-500 opacity-20 absolute inset-0 blur-3xl"></div>
            <img
              src="/hero-bg.jpg"
              alt="Cumberland High School"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
