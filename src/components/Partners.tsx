export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
Our Official Partners        </h2>
        <div className="flex justify-center items-center">
          <a
            href="https://www.anpt.dz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img
              src="/logo_anpt_02.png"
              alt="ANPT Logo"
              className="h-16 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
