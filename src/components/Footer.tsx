import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ticketech",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/people/TickeTech/61570660832185/",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ticket_tech/",
      icon: <FaInstagram className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:abdessamie.allouane@inttic.dz"
                  className="ml-2 hover:text-purple-400"
                >
                  abdessamie.allouane@inttic.dz
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors">
                <span className="font-medium">Phone:</span>
                <a
                  href="tel:+213791303612"
                  className="ml-2 hover:text-purple-400"
                >
                  +213 791 30 36 12
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-end space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TickeTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
