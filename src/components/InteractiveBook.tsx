import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function InteractiveBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    { title: 'Code of Conduct', content: 'Welcome to your digital handbook!' },
    { title: 'Respect & Integrity', content: 'Students are expected to treat all peers, staff, and property with respect.' },
    { title: 'Attendance & Punctuality', content: 'Regular attendance and punctuality are required to maintain good standing.' },
    { title: 'Dress Code', content: 'Students must adhere to the school’s dress code policy at all times.' },
    { title: 'Academic Honesty', content: 'Cheating, plagiarism, or misrepresentation of work is strictly prohibited..' },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-4 flex items-center justify-center">
      <style>{`
        .book-scene {
          perspective: 1200px;
        }

        .book {
          position: relative;
          width: 400px;
          height: 300px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }

        .book.closed {
          transform: rotateY(0deg);
        }

        .book.open {
          transform: rotateY(-160deg);
        }

        .page {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .page.front {
          background: linear-gradient(to bottom, #374151, #1f2937);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .page.back {
          background: linear-gradient(to bottom, #1e293b, #0f172a);
          transform: rotateY(180deg);
          padding: 2rem;
          color: #e5e7eb;
          text-align: left;
          overflow-y: auto;
        }

        .arrow {
          transition: transform 0.3s;
        }

        .arrow:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold text-white text-center mb-2">
          Student Code of Conduct
        </h1>
        <p className="text-gray-300 text-center max-w-2xl">
          Interactive Digital Handbook
        </p>

        {/* Book Scene */}
        <div className="book-scene">
          <div className={`book ${currentPage === 0 ? 'closed' : 'open'}`}>
            <div className="page front">
              <h2 className="text-3xl font-bold mb-4">{pages[0].title}</h2>
              <p className="text-gray-300">{pages[0].content}</p>
              {currentPage === 0 && (
                <p className="mt-6 text-blue-400 animate-pulse">
                  Click ➡ to open
                </p>
              )}
            </div>
            <div className="page back">
              <h2 className="text-2xl font-semibold mb-4">
                {pages[currentPage].title}
              </h2>
              <p>{pages[currentPage].content}</p>
              <div className="text-sm text-gray-500 mt-4">
                Page {currentPage + 1} of {pages.length}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center space-x-12 mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl arrow'
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentPage === pages.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl arrow'
            }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}