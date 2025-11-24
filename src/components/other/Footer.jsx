import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1c] border-t border-gray-700 mt-10 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold text-white">Bisnu.dev</h2>
          <p className="text-gray-400 text-sm mt-2">
            Building modern solutions with clean code & creative UI.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium">Quick Links</h3>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium">Connect</h3>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-gray-400">
            <a href="https://github.com/Bisnu-ai" className="hover:text-white transition"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition"><Mail size={20} /></a>
            <a href="#" className="hover:text-white transition"><Globe size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Bisnu.dev</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
