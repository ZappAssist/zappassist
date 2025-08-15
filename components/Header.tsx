
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/b16afbe0e08b9f95eb43181fa2d56848/da0d384c59f45d2cdeb3ee80ba961ef4.png" 
              alt="ZappAssist Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="#funcionalidades" className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer text-sm xl:text-base">
              Funcionalidades
            </Link>
            <Link href="#planos" className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer text-sm xl:text-base">
              Planos
            </Link>
            <Link href="#depoimentos" className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer text-sm xl:text-base">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer text-sm xl:text-base">
              FAQ
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer text-sm xl:text-base">
              Contato
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="https://wa.me/5535991217758?text=Olá! Vim pelo site e quero saber mais sobre o ZappAssist"
              className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer text-sm lg:text-base"
            >
              <i className="ri-whatsapp-line mr-1 lg:mr-2"></i>
              <span className="hidden lg:inline">Falar no </span>WhatsApp
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="#funcionalidades" 
                className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-function-line mr-3 text-[#9f60fe]"></i>
                Funcionalidades
              </Link>
              <Link 
                href="#planos" 
                className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-price-tag-3-line mr-3 text-[#9f60fe]"></i>
                Planos
              </Link>
              <Link 
                href="#depoimentos" 
                className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-chat-quote-line mr-3 text-[#9f60fe]"></i>
                Depoimentos
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-question-line mr-3 text-[#9f60fe]"></i>
                FAQ
              </Link>
              <Link 
                href="#contato" 
                className="text-gray-600 hover:text-[#9f60fe] transition-colors cursor-pointer py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="ri-customer-service-line mr-3 text-[#9f60fe]"></i>
                Contato
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href="https://wa.me/5535991217758?text=Olá! Vim pelo site e quero saber mais sobre o ZappAssist"
                  className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-whatsapp-line mr-2"></i>
                  Falar no WhatsApp
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
