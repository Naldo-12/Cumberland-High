import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'codeofconduct') => void;
  currentPage: 'home' | 'codeofconduct';
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAnchorClick = (href: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const navItems = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', anchor: '#about' },
    { name: 'Programs', anchor: '#programs' },
    { name: 'Events', anchor: '#events' },
    { name: 'News', anchor: '#news' },
    { name: 'Code of Conduct', page: 'codeofconduct' as const },
    { name: 'Contact', anchor: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/real-logo.jpg" alt="Cumberland High School" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-tight">Cumberland High</span>
              <span className="text-xs text-gray-600">Excellence in Education</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if ('page' in item) {
                    onNavigate(item.page);
                  } else if ('anchor' in item) {
                    handleAnchorClick(item.anchor);
                  }
                }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if ('page' in item) {
                    onNavigate(item.page);
                  } else if ('anchor' in item) {
                    handleAnchorClick(item.anchor);
                  }
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
