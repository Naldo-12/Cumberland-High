import { Award, Users, BookOpen, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '1,200+', label: 'Students' },
    { icon: BookOpen, value: '85+', label: 'Faculty Members' },
    { icon: Award, value: '95%', label: 'Graduation Rate' },
    { icon: Target, value: '30+', label: 'Programs Offered' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cumberland High School is on a path of transformation: reshaping systems, culture and ethos to become a school of choice and a Centre of TVET excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/mission.jpg"
            alt="Our Mission"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission and Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cumberland High School is the future-focused Centre of Excellence, that equips all students with specialised technical, vocation education and training programmesas well as the relevant social skills and appropriate behaviours that match world-class standards and are responsive to industry needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cumberland High School commits to being an effective TVET-based institution that offers a high quality education and training curriculum that is outcome-driven technologically responsive and global in outlook. Through transformational and visionary leadership, a cadre of qualified and devoted staff and the support of stakeholders, students will be empowered to become fully functional and productive members of an evolving society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
