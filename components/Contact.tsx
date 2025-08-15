
'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[#9f60fe]">contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar você a transformar seu atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-whatsapp-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Fale conosco agora mesmo</p>
            <Link 
              href="https://wa.me/5535991217758?text=Olá! Preciso de ajuda com o ZappAssist"
              className="text-[#9f60fe] font-semibold hover:text-[#00e4e3] transition-colors cursor-pointer"
            >
              (35) 99121-7758
            </Link>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">E-mail</h3>
            <p className="text-gray-600 mb-4">Envie sua mensagem</p>
            <div className="space-y-2">
              <Link 
                href="mailto:comercial@zappassist.com.br"
                className="block text-[#9f60fe] font-semibold hover:text-[#00e4e3] transition-colors cursor-pointer"
              >
                comercial@zappassist.com.br
              </Link>
              <Link 
                href="mailto:suporte@zappassist.com.br"
                className="block text-[#9f60fe] font-semibold hover:text-[#00e4e3] transition-colors cursor-pointer"
              >
                suporte@zappassist.com.br
              </Link>
            </div>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-instagram-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Instagram</h3>
            <p className="text-gray-600 mb-4">Siga nossas novidades</p>
            <Link 
              href="https://www.instagram.com/zappassist/"
              className="text-[#9f60fe] font-semibold hover:text-[#00e4e3] transition-colors cursor-pointer"
            >
              @zappassist
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para começar?</h3>
          <p className="text-xl mb-8 opacity-90">
            Teste grátis por 7 dias, sem cartão de crédito
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <i className="ri-message-3-fill text-2xl"></i>
              <span className="text-lg">Atendimento 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-flashlight-fill text-2xl"></i>
              <span className="text-lg">Integração fácil</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-bar-chart-fill text-2xl"></i>
              <span className="text-lg">Mais eficiência</span>
            </div>
          </div>

          <Link 
            href="https://wa.me/5535991217758?text=Olá! Quero começar minha transformação digital com o ZappAssist. Como posso iniciar?"
            className="inline-block bg-white text-[#9f60fe] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
