import Image from "next/image";

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Official Partners
          </h2>

          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-gray-300 mb-6 text-lg">
              We are proud to be supported by the National Agency for the
              Promotion and Development of Technology Parks (
              <strong>ANPT</strong>), a leading technology incubator located in
              Sidi Abdellah, Algeria.
            </p>
            <p className="text-gray-300 text-lg">
              <strong>ANPT</strong> provides innovative startups with the
              resources, mentorship, and infrastructure needed to thrive in the
              digital economy.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <a
              href="https://www.anpt.dz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity block mb-8"
            >
              <Image
                src="/logo_anpt_02.png"
                alt="ANPT Logo"
                className="h-16 object-contain mx-auto"
                width={500}
                height={100}
                priority
              />
            </a>

            <a
              href="https://www.anpt.dz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-all"
            >
              Visit ANPT Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
