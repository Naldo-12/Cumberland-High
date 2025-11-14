import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function InteractiveBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('right');

  const pages = [
    {
      title: 'Code of Conduct',
      content: 'Welcome to your digital handbook! This is the cover page.',
    },
    {
      title: 'Respect & Integrity',
      content: 'Students are expected to treat all peers, staff, and property with respect. Integrity is the foundation of our school community.',
    },
    {
      title: 'Attendance & Punctuality',
      content: 'Regular attendance and punctuality are required to maintain good standing. Excessive absences may result in disciplinary action.',
    },
    {
      title: 'Dress Code',
      content: 'Students must adhere to the school\'s dress code policy at all times. Violations will be addressed with appropriate consequences.',
    },
    {
      title: 'Academic Honesty',
      content: 'Cheating, plagiarism, or misrepresentation of work is strictly prohibited. Academic integrity is essential to our mission.',
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('right');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 700);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('left');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 700);
    }
  };

  const getLeftPage = () => {
    return currentPage === 0 ? 0 : currentPage - 1;
  };

  const getRightPage = () => {
    return currentPage;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20 px-4 flex items-center justify-center">
      <style>{`
        @keyframes flipRight {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        @keyframes flipLeft {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .book-container {
          perspective: 2000px;
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .book {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: 500px;
          display: flex;
          gap: 0;
          transform-style: preserve-3d;
        }

        .page-wrapper {
          flex: 1;
          perspective: 1200px;
          position: relative;
          height: 100%;
        }

        .left-page-wrapper {
          display: flex;
          justify-content: flex-end;
        }

        .right-page-wrapper {
          display: flex;
          justify-content: flex-start;
        }

        .page {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
          border-radius: 0 8px 8px 0;
          box-shadow: inset -2px 0 4px rgba(0, 0, 0, 0.1),
                      0 8px 24px rgba(0, 0, 0, 0.3);
          padding: 40px;
          overflow-y: auto;
          color: #1f2937;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .page.left {
          border-radius: 8px 0 0 8px;
          box-shadow: inset 2px 0 4px rgba(0, 0, 0, 0.1),
                      -8px 8px 24px rgba(0, 0, 0, 0.3);
        }

        .page.right {
          border-radius: 0 8px 8px 0;
        }

        .page.flipping-right {
          animation: flipRight 0.7s ease-in-out forwards;
        }

        .page.flipping-left {
          animation: flipLeft 0.7s ease-in-out forwards;
        }

        .page h2 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #1e40af;
          border-bottom: 3px solid #3b82f6;
          padding-bottom: 15px;
        }

        .page p {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          word-wrap: break-word;
        }

        .page-number {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #d1d5db;
          font-size: 12px;
          color: #9ca3af;
          text-align: center;
        }

        .page-spine {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent);
          transform: translateX(-50%);
          z-index: 10;
        }

        .book-shadow {
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }
      `}</style>

      <div className="flex flex-col items-center space-y-8 w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            Student Code of Conduct
          </h1>
          <p className="text-gray-300">Interactive Digital Handbook</p>
        </div>

        <div className="book-container">
          <div className="book">
            {/* Left Page */}
            <div className="page-wrapper left-page-wrapper">
              <div
                className={`page left ${isFlipping && flipDirection === 'left' ? 'flipping-left' : ''}`}
              >
                {currentPage > 0 ? (
                  <>
                    <h2>{pages[getLeftPage()].title}</h2>
                    <p>{pages[getLeftPage()].content}</p>
                    <div className="page-number">Page {getLeftPage() + 1}</div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <p className="text-center">Open the book to begin</p>
                  </div>
                )}
              </div>
            </div>

            {/* Center Spine */}
            <div className="page-spine" />

            {/* Right Page */}
            <div className="page-wrapper right-page-wrapper">
              <div
                className={`page right ${isFlipping && flipDirection === 'right' ? 'flipping-right' : ''}`}
              >
                <h2>{pages[getRightPage()].title}</h2>
                <p>{pages[getRightPage()].content}</p>
                <div className="page-number">Page {getRightPage() + 1}</div>
              </div>
            </div>

            {/* Book Shadow */}
            <div className="book-shadow" />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 pt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 shadow-lg hover:shadow-xl'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentPage && !isFlipping) {
                    if (index > currentPage) {
                      setFlipDirection('right');
                    } else {
                      setFlipDirection('left');
                    }
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 700);
                  }
                }}
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
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentPage === pages.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 shadow-lg hover:shadow-xl'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-gray-400 text-sm">
          Page {currentPage + 1} of {pages.length}
        </div>
      </div>
    </div>
  );
}
