"use client";

export default function Surveys() {
  return (
    <section id="surveys" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Us Build the Perfect Solution
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            Your feedback is invaluable in shaping the future of event
            management. Choose your role and share your experience with us.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Organizer Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Event Organizers
              </h3>
              <p className="text-gray-300 mb-6">
                Share your challenges and needs in event management and
                ticketing.
              </p>
              <a
                href="https://forms.gle/9mP5w65AbKsjaGUu5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all"
              >
                Take Organizer Survey
              </a>
            </div>

            {/* Attendee Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎟️</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Event Attendees
              </h3>
              <p className="text-gray-300 mb-6">
                Tell us about your event booking and attendance experience.
              </p>
              <a
                href="https://forms.gle/5afdjfUcP5Wa7B3F8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all"
              >
                Take Attendee Survey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
