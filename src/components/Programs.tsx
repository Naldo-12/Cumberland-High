import { useState } from 'react';
import { ChevronDown, Briefcase, ChefHat, Sprout, Wrench, Palette, Zap, ShoppingCart, Scissors, UtensilsCrossed } from 'lucide-react';

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const programs = [
    {
      title: 'Business Studies',
      description: 'Master the fundamentals of business management, accounting, and entrepreneurship to prepare for success in the corporate world.',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Information Technology',
        'Principle of Business',
        'Principles of Accounts',
        'Home and Family Life Education (HFLE)',
      ],
    },
    {
      title: 'Home Economics',
      description: 'Develop practical skills in nutrition, family management, and lifestyle planning for personal and professional growth.',
      icon: ChefHat,
      color: 'from-orange-500 to-orange-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science/H&S Biology',
        'Social Studies',
        'Information Technology',
        'Food Nutrition & Health',
        'Spanish',
        'Family and Resource Management',
      ],
    },
    {
      title: 'Agriculture/Physical Education',
      description: 'Build strength in farming practices, athletic excellence, and environmental stewardship through hands-on learning.',
      icon: Sprout,
      color: 'from-green-500 to-green-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science/H&S Biology',
        'Social Studies',
        'Agriculture/Physical Education',
        'Data Operations',
        'Dance OR Drama OR Music',
        'Home and Family Life Education (HFLE)',
      ],
    },
    {
      title: 'Industrial Techniques',
      description: 'Master hands-on technical skills in welding, furniture making, and precision craftsmanship for manufacturing careers.',
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Furniture Making',
        'Welding',
        'Technical Drawing',
      ],
    },
    {
      title: 'Design Arts 1',
      description: 'Explore creative expression through fashion design, visual arts, and performing arts to launch a career in creative industries.',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Fashion Designing',
        'Visual Arts',
        'Dance OR Drama OR Music',
      ],
    },
    {
      title: 'Design Arts 2',
      description: 'Advance your creative portfolio with specialized design skills in fashion, visual arts, and event design.',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Fashion Designing',
        'Visual Arts',
        'Floral Arrange/IT Office Applications',
        'Dance OR Drama OR Music',
      ],
    },
    {
      title: 'Crop Production',
      description: 'Develop sustainable agricultural practices and advanced farming techniques for modern agricultural careers.',
      icon: Sprout,
      color: 'from-lime-500 to-lime-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Data Operations/IT Office Applications',
        'Theatre (Dance OR Drama OR Music)',
        'Home and Family Life Education (HFLE)',
      ],
    },
    {
      title: 'Electrical Installation',
      description: 'Learn cutting-edge electrical systems, technical drawings, and safety practices for electrical trade careers.',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Electrical Installation',
        'Technical Drawing',
        'Data Operations/IT Office Applications',
        'Furniture Making',
      ],
    },
    {
      title: 'Business Studies 2',
      description: 'Specialize in customer-focused business operations and service excellence for hospitality and retail sectors.',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-indigo-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Customer Service',
        'Principle of Business',
        'Data Operations',
        'Home and Family Life Education (HFLE)',
      ],
    },
    {
      title: 'Cosmetology',
      description: 'Master beauty and grooming artistry, customer service, and salon management for rewarding careers in the beauty industry.',
      icon: Scissors,
      color: 'from-rose-500 to-rose-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Cosmetology/Barbering',
        'Data Operations',
        'Customer Service',
        'Home and Family Life Education (HFLE)',
      ],
    },
    {
      title: 'Hospitality',
      description: 'Develop exceptional culinary and hospitality skills to excel in food service, events, and guest management.',
      icon: UtensilsCrossed,
      color: 'from-amber-500 to-amber-600',
      subjects: [
        'Mathematics',
        'English Language/Reading',
        'Integrated Science',
        'Social Studies',
        'Commercial Food Preparation',
        'Food and Beverage',
        'Dance OR Drama OR Music',
        'Spanish',
      ],
    },
  ];

  const toggleProgram = (title: string) => {
    setExpandedProgram(expandedProgram === title ? null : title);
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of academic programs. Click on any program to see the subjects involved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <button
                key={program.title}
                onClick={() => toggleProgram(program.title)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${program.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-pattern" />
                  <Icon className="h-16 w-16 text-white relative z-10" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <span>View Subjects</span>
                    <ChevronDown
                      className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                        expandedProgram === program.title ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {expandedProgram === program.title && (
                  <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
                    <div className="space-y-2">
                      {program.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-start space-x-3 p-2"
                        >
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${program.color} mt-1.5 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
