'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteInfo } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', labelUrdu: 'ہوم' },
    { href: '/about', label: 'About', labelUrdu: 'ہمارے بارے' },
    { href: '/products', label: 'Products', labelUrdu: 'پروڈکٹس' },
    { href: '/contact', label: 'Contact', labelUrdu: 'رابطہ' },
    { href: '/cart', label: 'Cart', labelUrdu: 'کارٹ' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-green-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                  <span className="text-white font-bold text-lg sm:text-xl">ح</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold gradient-text">
                  {siteInfo.nameUrdu}
                </h1>
                <p className="text-xs text-gray-400">Quality Seeds Store</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Admin Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/admin/login"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Admin
              </Link>
              <Link
                href="/cart"
                className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:border-green-500/50 group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-300 origin-left ${
                    isOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 origin-left ${
                    isOpen ? '-rotate-45 -translate-y-0.5' : ''
                  }`}
                ></span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-16 sm:top-20 left-0 right-0 transition-all duration-500 transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="mx-4 p-4">
            <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
              {/* Menu Header */}
              <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ح</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{siteInfo.nameUrdu}</h3>
                    <p className="text-xs text-gray-400">Menu</p>
                  </div>
                </div>
              </div>

              {/* Menu Links */}
              <div className="p-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 group"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.3s ease ${index * 0.1}s`
                    }}
                  >
                    {/* Icon Container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      index === 0 ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                      index === 1 ? 'bg-gradient-to-br from-blue-400 to-cyan-600' :
                      index === 2 ? 'bg-gradient-to-br from-yellow-400 to-orange-600' :
                      index === 3 ? 'bg-gradient-to-br from-purple-400 to-violet-600' :
                      'bg-gradient-to-br from-pink-400 to-rose-600'
                    }`}>
                      {index === 0 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1">
                      <span className="font-medium text-white group-hover:text-green-400 transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="block text-xs text-gray-400 urdu-text">{link.labelUrdu}</span>
                    </div>

                    {/* Arrow */}
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Admin & Cart Buttons */}
              <div className="p-4 border-t border-slate-700/50 bg-gradient-to-r from-purple-500/5 to-violet-500/5">
                <div className="flex gap-2">
                  <Link
                    href="/admin/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl text-center font-medium text-white hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Admin Login
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-center font-medium text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    View Cart
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-4 bg-slate-900/50 border-t border-slate-700/50">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{siteInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}