import React, { useState } from 'react';
import { Menu, X, Code, FileText, Camera, Mail, PenTool, Gamepad2 } from 'lucide-react';

const NavItem = ({ icon: Icon, text }) => (
  <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
    <Icon size={20} />
    <span>{text}</span>
  </li>
);

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`bg-gray-800 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="container mx-auto py-4 space-y-2 md:flex md:space-y-0 md:space-x-4">
          <NavItem icon={Code} text="Projects" />
          <NavItem icon={FileText} text="Resume" />
          <NavItem icon={Camera} text="Photos" />
          <NavItem icon={Mail} text="Contact" />
          <NavItem icon={PenTool} text="Guestbook" />
          <NavItem icon={Gamepad2} text="Runner Game" />
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {/* Content for each page will go here */}
        <p className="text-xl">Welcome to my personal portfolio!</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;