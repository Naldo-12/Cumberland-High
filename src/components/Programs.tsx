import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const programs = [
    {
      title: 'Business Studies',
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of academic programs. Click on any program to see the subjects involved.
          </p>
        </div>

        <div className="space-y-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleProgram(program.title)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {program.title}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    expandedProgram === program.title ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedProgram === program.title && (
                <div className="px-6 py-4 bg-gradient-to-br from-blue-50 to-green-50 border-t border-gray-200">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.subjects.map((subject) => (
                      <div
                        key={subject}
                        className="flex items-start space-x-3 p-3 bg-white rounded-lg"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
