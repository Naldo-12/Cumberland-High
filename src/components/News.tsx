import { ChevronRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Academics',
      date: 'October 8, 2025',
      title: 'Cumberland Students Excel at State Science Fair',
      excerpt: 'Five students from our STEM program earned top honors at the state competition, showcasing innovative research projects.',
    },
    {
      image: 'https://images.pexels.com/photos/159376/soccer-football-ball-sport-159376.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Athletics',
      date: 'October 5, 2025',
      title: 'Eagles Soccer Team Advances to Regional Finals',
      excerpt: 'Our varsity soccer team secured a decisive victory, earning their spot in the regional championship next week.',
    },
    {
      image: 'https://images.pexels.com/photos/8500453/pexels-photo-8500453.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Community',
      date: 'October 1, 2025',
      title: 'New Library Wing Opens to Students',
      excerpt: 'The state-of-the-art addition features collaborative spaces, digital resources, and a maker lab for hands-on learning.',
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
