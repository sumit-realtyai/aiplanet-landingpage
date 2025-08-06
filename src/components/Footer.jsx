import React from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Planet
              </h3>
              <p className="text-gray-400 mt-2">A subsidiary of RealtyAI</p>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Crafting the next generation of agentic AI systems that observe, reason, and act autonomously across voice, vision, and robotics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-6">
            <h4 className="text-xl font-semibold">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Press</a></li>
            </ul>
          </div> */}

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI Planet. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;