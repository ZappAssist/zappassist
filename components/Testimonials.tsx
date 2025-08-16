'use client';

import Link from 'next/link';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-[#9f60fe]/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <i className="ri-heart-line text-[#9f60fe] mr-2"></i>
            <span className="text-[#9f60fe] font-semibold text-sm sm:text-base">Histórias Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Empresários que{' '}
            <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">
              transformaram
            </span>{' '}
            seus negócios
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Veja como pequenos empresários do Sul de Minas estão usando o ZappAssist para crescer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Depoimento 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Carlos</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Pizzaria Recanto - Itajubá/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "Antes eu perdia muito pedido porque não conseguia responder todo mundo rápido. Agora o chatbot responde na hora e eu só preciso confirmar o pedido. As vendas aumentaram 50%!"
            </p>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Ana Paula</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Doceria Sabor Caseiro - Poços de Caldas/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "O melhor foi automatizar as perguntas sobre sabores, preços e prazos de entrega. Agora eu foco só em fazer doces deliciosos e o sistema cuida do resto. Meus clientes adoram a rapidez!"
            </p>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">João Pedro</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Açaíteria Tropical - Varginha/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "Trabalho sozinho e era impossível atender WhatsApp, Instagram e fazer açaí ao mesmo tempo. Agora tudo fica organizado num lugar só e não perco mais nenhum cliente."
            </p>
          </div>

          {/* Depoimento 4 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Mariana</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Boutique Flor de Liz - Três Corações/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "Com o ZappAssist consigo atender minhas clientes mesmo quando estou no fornecedor. O chatbot tira as dúvidas básicas e quando volto já tenho os pedidos organizados."
            </p>
          </div>

          {/* Depoimento 5 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Roberto</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Lanchonete do Beto - Lavras/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "Desde que comecei a usar, nunca mais esqueci de um pedido. O sistema me lembra de tudo e ainda manda mensagem automática quando o lanche fica pronto. Os clientes ficam impressionados!"
            </p>
          </div>

          {/* Depoimento 6 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <i className="ri-user-line text-white text-lg sm:text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Fernanda</h4>
                <p className="text-[#9f60fe] font-semibold text-sm sm:text-base">Salão Beleza Pura - Três Pontas/MG</p>
              </div>
            </div>
            <div className="flex mb-3 sm:mb-4">
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
              <i className="ri-star-fill text-yellow-400 text-sm sm:text-base"></i>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
              "Revolucionou meu agendamento! As clientes podem marcar horário mesmo de madrugada e eu acordo com a agenda organizada. Diminuiu muito os cancelamentos de última hora."
            </p>
          </div>
        </div>

        {/* CTA dos Depoimentos */}
        <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Seu negócio pode ser o próximo!</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Junte-se a centenas de empresários que já automatizaram seus atendimentos
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-xl sm:text-2xl"></i>
              <span className="text-base sm:text-lg">Teste grátis por 7 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-xl sm:text-2xl"></i>
              <span className="text-base sm:text-lg">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-xl sm:text-2xl"></i>
              <span className="text-base sm:text-lg">Configuração simples</span>
            </div>
          </div>

          <Link 
            href="https://wa.me/5535991217758?text=Olá! Quero automatizar meu atendimento como os outros empresários"
            className="bg-white text-[#9f60fe] px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer inline-block"
          >
            <i className="ri-rocket-line mr-2"></i>Começar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}