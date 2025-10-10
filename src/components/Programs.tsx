import { BookOpen, Palette, FlaskConical, Music, Trophy, Globe } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Social Studies',
      description: 'Social Studies helps students understand human society, culture, and the world around them, fostering informed and responsible citizens.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FlaskConical,
      title: 'Science',
      description: 'Science encourages curiosity and discovery, helping students explore the natural world through observation, experimentation, and critical thinking.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Palette,
      title: 'Arts & Creativity',
      description: 'Comprehensive visual and performing arts programs including theater, music, and digital media.',
      color: 'from-yellow-600 to-yellow-700',
    },
    {
      icon: Trophy,
      title: 'Athletics',
      description: '15 varsity sports with championship-winning teams and state-of-the-art athletic facilities.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Music,
      title: 'Music Programs',
      description: 'Award-winning band, orchestra, and choir with regular performances and competitions.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Global Studies',
      description: 'International exchange programs and multicultural education preparing students for a global society.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of academic and extracurricular programs designed to
            help every student excel in their areas of interest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
