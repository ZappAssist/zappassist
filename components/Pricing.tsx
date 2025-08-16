'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#9f60fe]/10 rounded-full px-6 py-2 mb-6">
            <i className="ri-price-tag-3-line text-[#9f60fe] mr-2"></i>
            <span className="text-[#9f60fe] font-semibold">Planos Transparentes</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Investimento que{' '}
            <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">
              se paga sozinho
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para o seu negócio. Todos incluem teste gratuito de 7 dias sem cartão de crédito
          </p>
          
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <i className="ri-shield-check-line text-green-500 mr-2"></i>
            <span className="text-green-800 font-semibold">Garantia de 30 dias ou seu dinheiro de volta</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Plano Bronze */}
          <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200">
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-vip-crown-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Economize R$ 500/mês
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">R$ 99,99</span>
                <span className="text-gray-500 ml-2 text-lg">/mês</span>
              </div>

              <div className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <div className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <i className="ri-team-line mr-2 text-[#9f60fe]"></i>
                  5 usuários
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <i className="ri-smartphone-line mr-2 text-[#00e4e3]"></i>
                  1 conexão (WhatsApp)
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">WhatsApp integrado</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Chatbot inteligente</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Kanban de tickets</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Mensagens rápidas</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Suporte por email</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Relatórios básicos</span>
                </li>
              </ul>

              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="w-full py-4 px-6 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer text-center block shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 mb-3 bg-gray-900 text-white hover:bg-gray-800"
              >
                <i className="ri-rocket-line mr-2"></i>Começar Teste Grátis
              </Link>
              <Link 
                href="https://wa.me/5535991217758?text=Quero contratar o plano Bronze por R$ 99,99/mês"
                className="w-full py-3 px-4 rounded-2xl font-semibold transition-all cursor-pointer text-center block border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-white hover:bg-green-500 duration-300 text-sm"
              >
                <i className="ri-whatsapp-line mr-2"></i>Contratar WhatsApp
              </Link>
              <div className="text-center mt-4 text-xs text-gray-500">
                Sem cartão de crédito • Cancelamento gratuito
              </div>
            </div>
          </div>

          {/* Plano Prata */}
          <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200">
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-vip-crown-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Prata</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Economize R$ 800/mês
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">R$ 149,99</span>
                <span className="text-gray-500 ml-2 text-lg">/mês</span>
              </div>

              <div className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <div className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <i className="ri-team-line mr-2 text-[#9f60fe]"></i>
                  8 usuários
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <i className="ri-smartphone-line mr-2 text-[#00e4e3]"></i>
                  2 conexões (WhatsApp, Telegram)
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">WhatsApp + Telegram</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Chatbot inteligente</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Kanban de tickets</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Agendamento de mensagens</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Tags e organização</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Suporte prioritário</span>
                </li>
              </ul>

              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="w-full py-4 px-6 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer text-center block shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 mb-3 bg-gray-900 text-white hover:bg-gray-800"
              >
                <i className="ri-rocket-line mr-2"></i>Começar Teste Grátis
              </Link>
              <Link 
                href="https://wa.me/5535991217758?text=Quero contratar o plano Prata por R$ 149,99/mês"
                className="w-full py-3 px-4 rounded-2xl font-semibold transition-all cursor-pointer text-center block border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-white hover:bg-green-500 duration-300 text-sm"
              >
                <i className="ri-whatsapp-line mr-2"></i>Contratar WhatsApp
              </Link>
              <div className="text-center mt-4 text-xs text-gray-500">
                Sem cartão de crédito • Cancelamento gratuito
              </div>
            </div>
          </div>

          {/* Plano Ouro - Mais Vendido */}
          <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#9f60fe] scale-105">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                <i className="ri-star-fill mr-2"></i>Mais Vendido
              </div>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-vip-crown-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ouro</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Economize R$ 1.200/mês
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">R$ 249,99</span>
                <span className="text-gray-500 ml-2 text-lg">/mês</span>
              </div>

              <div className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <div className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <i className="ri-team-line mr-2 text-[#9f60fe]"></i>
                  10 usuários
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <i className="ri-smartphone-line mr-2 text-[#00e4e3]"></i>
                  3 conexões (WhatsApp, Telegram, Facebook)
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Todas as conexões anteriores + Facebook</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Chatbot inteligente</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Kanban de tickets</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Campanhas avançadas</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Hub de integrações</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Relatórios avançados</span>
                </li>
              </ul>

              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="w-full py-4 px-6 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer text-center block shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 mb-3 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white"
              >
                <i className="ri-rocket-line mr-2"></i>Começar Teste Grátis
              </Link>
              <Link 
                href="https://wa.me/5535991217758?text=Quero contratar o plano Ouro por R$ 249,99/mês"
                className="w-full py-3 px-4 rounded-2xl font-semibold transition-all cursor-pointer text-center block border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-white hover:bg-green-500 duration-300 text-sm"
              >
                <i className="ri-whatsapp-line mr-2"></i>Contratar WhatsApp
              </Link>
              <div className="text-center mt-4 text-xs text-gray-500">
                Sem cartão de crédito • Cancelamento gratuito
              </div>
            </div>
          </div>

          {/* Plano Diamante */}
          <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200">
            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className="ri-vip-crown-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Diamante</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Economize R$ 1.500/mês
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">R$ 299,99</span>
                <span className="text-gray-500 ml-2 text-lg">/mês</span>
              </div>

              <div className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <div className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                  <i className="ri-team-line mr-2 text-[#9f60fe]"></i>
                  12 usuários
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <i className="ri-smartphone-line mr-2 text-[#00e4e3]"></i>
                  4 conexões (WhatsApp, Telegram, Facebook, Instagram)
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Todas as conexões + Instagram</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Chatbot inteligente</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Kanban de tickets</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Campanhas + Hub de integrações</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Suporte 24/7</span>
                </li>
                <li className="flex items-start text-sm text-gray-700">
                  <i className="ri-check-line text-[#00e4e3] mr-3 text-lg mt-0.5 flex-shrink-0"></i>
                  <span className="leading-relaxed">Relatórios premium</span>
                </li>
              </ul>

              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="w-full py-4 px-6 rounded-2xl font-bold transition-all whitespace-nowrap cursor-pointer text-center block shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 mb-3 bg-gray-900 text-white hover:bg-gray-800"
              >
                <i className="ri-rocket-line mr-2"></i>Começar Teste Grátis
              </Link>
              <Link 
                href="https://wa.me/5535991217758?text=Quero contratar o plano Diamante por R$ 299,99/mês"
                className="w-full py-3 px-4 rounded-2xl font-semibold transition-all cursor-pointer text-center block border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-white hover:bg-green-500 duration-300 text-sm"
              >
                <i className="ri-whatsapp-line mr-2"></i>Contratar WhatsApp
              </Link>
              <div className="text-center mt-4 text-xs text-gray-500">
                Sem cartão de crédito • Cancelamento gratuito
              </div>
            </div>
          </div>
        </div>

        {/* Recursos Adicionais */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Recursos <span className="text-[#9f60fe]">Adicionais</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Personalize seu plano com funcionalidades extras
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">API Plus WhatsApp</h4>
              <div className="text-3xl font-bold text-[#9f60fe] mb-4">+R$ 10</div>
              <p className="text-gray-600 leading-relaxed">Botões e listas no chatbot</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-verified-badge-line text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">API Oficial WhatsApp</h4>
              <div className="text-3xl font-bold text-[#9f60fe] mb-4">+R$ 150/mês</div>
              <p className="text-gray-600 leading-relaxed">Recomendado para alto volume</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-instagram-line text-white text-2xl"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">Instagram/Facebook</h4>
              <div className="text-3xl font-bold text-[#9f60fe] mb-4">+R$ 50/conexão</div>
              <p className="text-gray-600 leading-relaxed">Para planos Bronze/Prata</p>
            </div>
          </div>
        </div>

        {/* Informações sobre integrações */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border-2 border-[#9f60fe]/20">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-white text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-xl">Sobre as Integrações Externas</h4>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <strong>Hub de Integrações:</strong> Fornecemos a plataforma para conectar com OpenAI, N8N, TypeBot e outros serviços.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Os custos dessas integrações externas (como tokens da OpenAI) são de responsabilidade do cliente e pagos diretamente aos fornecedores. 
                Nossa equipe ajuda na configuração sem custos adicionais.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <i className="ri-fire-line text-yellow-300 mr-2"></i>
                <span className="font-semibold">OFERTA LIMITADA</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Não perca tempo competindo com atendimento manual</h3>
              <p className="text-xl mb-2 opacity-90">Enquanto você pensa, seus concorrentes já estão automatizando e vendendo mais</p>
              <p className="text-lg mb-8 opacity-80">⏰ Mais de 50 empresas se cadastraram essa semana</p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                <Link 
                  href="https://chat.zappassist.com.br/#/signup"
                  className="bg-white text-[#9f60fe] px-10 py-5 rounded-full text-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xl"
                >
                  <i className="ri-whatsapp-line mr-3"></i>Teste Grátis por 7 Dias
                </Link>
                <Link 
                  href="https://wa.me/5535991217758?text=Quero contratar um plano do ZappAssist"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#9f60fe] transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-customer-service-line mr-2"></i>Falar com Vendas
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <i className="ri-flashlight-line text-2xl mb-2"></i>
                  <div className="font-semibold">Configuração em 5 minutos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <i className="ri-shield-check-line text-2xl mb-2"></i>
                  <div className="font-semibold">Sem cartão de crédito</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <i className="ri-customer-service-2-line text-2xl mb-2"></i>
                  <div className="font-semibold">Suporte dedicado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}