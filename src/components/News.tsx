import { ChevronRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      image: '/graduation-2025.jpg',
      category: 'Celebration',
      date: 'July 1, 2025',
      title: 'Saluting the Cumberland High School Graduating Class of 2025!',
      excerpt: 'Celebrating a significant milestone under the theme "Overcoming Challenges, Building Character, Achieving Excellence." Congratulations to students, teachers, and parents on this amazing achievement!',
    },
    {
      image: '/football.jpg',
      category: 'Athletics',
      date: 'November 15, 2023',
      title: 'Schoolboy Football 2023',
      excerpt: 'Young men who played their hearts out at each match!',
    },
    {
      image: '/competition.jpg',
      category: 'Competition',
      date: 'June 27, 2024',
      title: 'Cumberland High School remains the TVET Center of Excellence!',
      excerpt: 'Second place 🥈 in the VM Foundation Limited social enterprise competition!',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest achievements, announcements, and happenings at Cumberland High.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            View All News
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
