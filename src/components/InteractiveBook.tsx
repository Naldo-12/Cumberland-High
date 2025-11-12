import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function InteractiveBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: 'Code of Conduct',
      content: 'Page content will be added here',
    },
    {
      title: 'Page 1',
      content: 'Page content will be added here',
    },
    {
      title: 'Page 2',
      content: 'Page content will be added here',
    },
    {
      title: 'Page 3',
      content: 'Page content will be added here',
    },
    {
      title: 'Page 4',
      content: 'Page content will be added here',
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-4 flex items-center justify-center">
      <style>{`
        @keyframes pageFlip {
          0% {
            transform: rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: rotateY(-90deg);
            opacity: 0;
          }
        }

        @keyframes pageFlipIn {
          0% {
            transform: rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .book-container {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .book-page-left {
          animation: pageFlip 0.6s ease-in-out forwards;
        }

        .book-page-right {
          animation: pageFlipIn 0.6s ease-in-out forwards;
        }

        .book-spine {
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8), inset 2px 0 5px rgba(255, 255, 255, 0.1);
        }

        .book-page {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-5xl font-bold text-white text-center mb-2">
            Student Code of Conduct
          </h1>
          <p className="text-gray-300 text-center max-w-2xl">
            Interactive Digital Handbook
          </p>

          <div className="book-container w-full h-96 md:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse" />

              <div className="relative w-full h-full flex items-center justify-center">
                {currentPage === 0 ? (
                  <div className="text-center space-y-6 animate-fade-in">
                    <div className="text-6xl md:text-8xl mb-4">📖</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {pages[currentPage].title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Click the arrow to begin reading
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        {pages[currentPage].title}
                      </h2>
                      <p className="text-gray-200 text-lg leading-relaxed max-h-64 overflow-y-auto">
                        {pages[currentPage].content}
                      </p>
                    </div>
                    <div className="text-center text-gray-400 text-sm">
                      Page {currentPage + 1} of {pages.length}
                    </div>
                  </div>
                )}
              </div>

              <div className="book-spine absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600 to-slate-700 -translate-x-1/2" />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6 md:space-x-12">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                currentPage === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-110'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-3">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold transition-all duration-300 ${
                currentPage === pages.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-110'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            Page {currentPage + 1} of {pages.length}
          </div>
        </div>
      </div>
    </div>
  );
}
