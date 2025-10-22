/*import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: 'Oct 15',
      title: 'Fall Open House',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Campus',
      description: 'Join us for an evening of campus tours, meet our faculty, and learn about our programs.',
    },
    {
      date: 'Oct 22',
      title: 'Homecoming Game',
      time: '7:00 PM',
      location: 'Cumberland Stadium',
      description: 'Cheer on the Cumberland Eagles as they take on the visiting team. Spirit wear encouraged!',
    },
    {
      date: 'Nov 5',
      title: 'Fall Concert',
      time: '7:30 PM',
      location: 'Performing Arts Center',
      description: 'Experience an evening of musical excellence featuring our band, orchestra, and choir.',
    },
    {
      date: 'Nov 18',
      title: 'Parent-Teacher Conferences',
      time: '4:00 PM - 8:00 PM',
      location: 'Various Classrooms',
      description: 'Meet with teachers to discuss your student\'s progress and academic goals.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our vibrant school community through upcoming events and activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-xs font-semibold">{event.date.split(' ')[0]}</span>
                  <span className="text-2xl font-bold">{event.date.split(' ')[1]}</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            <Calendar className="h-5 w-5 mr-2" />
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
