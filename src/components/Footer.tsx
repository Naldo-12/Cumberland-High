import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/real-logo.jpg" alt="Cumberland High School" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-bold text-lg">Cumberland High</div>
                <div className="text-sm text-gray-400">Excellence in Education</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to achieve their dreams through quality education and community support.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="#events" className="hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#news" className="hover:text-blue-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Faculty Directory</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              
              <a href="https://www.facebook.com/p/Cumberland-High-School-Jamaica-100067410470108/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              
              <a href="https://www.instagram.com/cumberlandhighja/?hl=en" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              
             
            </div>
            <p className="text-gray-400 text-sm">
              1000 Cumberland Drive<br />
              Gregory Park, Jamaica<br />
              (876) 704-8365
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Cumberland High School. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
