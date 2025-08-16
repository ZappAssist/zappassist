
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://static.readdy.ai/image/b16afbe0e08b9f95eb43181fa2d56848/da0d384c59f45d2cdeb3ee80ba961ef4.png" 
                alt="ZappAssist Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Sistema inteligente de atendimento multicanal que unifica suas comunicações em uma única plataforma.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/zappassist/"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#9f60fe] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </Link>
              <Link 
                href="https://wa.me/5535991217758?text=Olá! Vim pelo site do ZappAssist e gostaria de mais informações."
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#00e4e3] transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#funcionalidades" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#planos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://wa.me/5535991217758?text=Olá! Preciso de suporte com o ZappAssist. Podem me ajudar?"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  (35) 99121-7758
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:comercial@zappassist.com.br"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  comercial@zappassist.com.br
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:suporte@zappassist.com.br"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  suporte@zappassist.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              2024 ZappAssist. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Teste grátis por 7 dias</span>
              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
              >
                Começar agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
