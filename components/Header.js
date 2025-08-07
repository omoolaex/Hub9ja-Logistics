'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useModal } from './ModalContext';

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal(); 

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Hub9ja Logistics" width={120} height={40} />
        </Link>

        {/* Right Side: Desktop Nav + CTA */}
        <div className="flex items-center space-x-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-green-900 font-medium">
            <Link href="#about" className="hover:text-yellow-500 transition">About</Link>
            <Link href="#services" className="hover:text-yellow-500 transition">Services</Link>
            <Link href="#contact" className="hover:text-yellow-500 transition">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => openModal('individual')} // ✅ Open Individual form
            className="hidden md:flex items-center space-x-2 border border-green-600 text-green-700 bg-white px-4 py-2 rounded-md font-medium hover:bg-green-50 transition"
          >
            <span>Booking</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-green-800 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Slide-in Menu */}
          <div className="w-3/4 bg-white h-full shadow-md transform transition-transform duration-300 ease-in-out">
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <Image src="/logo.png" alt="Hub9ja Logistics" width={100} height={32} />
              <button onClick={closeMenu} className="text-green-800 focus:outline-none">
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-6 space-y-4 text-green-900 font-medium text-base">
              <Link
                href="#about"
                onClick={closeMenu}
                className="flex items-center space-x-2"
              >
                <ArrowRight size={18} />
                <span>About</span>
              </Link>
              <Link
                href="#services"
                onClick={closeMenu}
                className="flex items-center space-x-2"
              >
                <ArrowRight size={18} />
                <span>Services</span>
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="flex items-center space-x-2"
              >
                <ArrowRight size={18} />
                <span>Contact</span>
              </Link>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  openModal('individual'); // ✅ Open modal
                  closeMenu();
                }}
                className="mt-4 flex items-center space-x-2 border border-green-600 text-green-700 bg-white px-4 py-2 rounded-md font-medium hover:bg-green-50 transition w-max"
              >
                <ArrowRight size={18} />
                <span>Booking</span>
              </button>
            </nav>
          </div>

          {/* Click-outside area */}
          <div className="w-1/4 bg-black/30" onClick={closeMenu} />
        </div>
      )}
    </header>
  );
}
