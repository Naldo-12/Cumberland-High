import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Events from './components/Events';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBook from './components/InteractiveBook';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'codeofconduct'>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/code-of-conduct') {
        setCurrentPage('codeofconduct');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'home' | 'codeofconduct') => {
    setCurrentPage(page);
    if (page === 'codeofconduct') {
      window.history.pushState({}, '', '/code-of-conduct');
    } else {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Programs />
            <Events />
            <News />
            <Contact />
          </>
        ) : (
          <InteractiveBook />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
