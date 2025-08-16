
'use client';

import Link from 'next/link';

export default function TrustIndicators() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-[#9f60fe]/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <i className="ri-shield-check-line text-[#9f60fe] mr-2"></i>
            <span className="text-[#9f60fe] font-semibold text-sm sm:text-base">Confiança Garantida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Por que <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">confiar</span> no ZappAssist?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compromisso total com a segurança, performance e satisfação dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Segurança de Dados */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="ri-shield-check-fill text-green-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Dados 100% Seguros</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">Criptografia SSL/TLS avançada</p>
            <div className="flex items-center justify-center">
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                Certificado A+
              </div>
            </div>
          </div>

          {/* Uptime Garantido */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="ri-pulse-fill text-blue-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Uptime 99.9%</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">Disponibilidade máxima garantida</p>
            <div className="flex items-center justify-center">
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                24h/7 dias
              </div>
            </div>
          </div>

          {/* Suporte Premium */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="ri-customer-service-2-fill text-purple-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Suporte Premium</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">Atendimento especializado 24/7</p>
            <div className="flex items-center justify-center">
              <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                Resposta em 1h
              </div>
            </div>
          </div>

          {/* Garantia Total */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <i className="ri-refund-2-fill text-orange-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-lg sm:text-xl">Garantia 30 Dias</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">100% do seu dinheiro de volta</p>
            <div className="flex items-center justify-center">
              <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                Sem perguntas
              </div>
            </div>
          </div>
        </div>

        {/* Certificações e Reconhecimentos */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Certificações e <span className="text-[#9f60fe]">Reconhecimentos</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-award-fill text-white text-xl sm:text-2xl"></i>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">ISO 27001</div>
                <div className="text-xs sm:text-sm text-gray-600">Segurança da Informação</div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-shield-check-fill text-white text-xl sm:text-2xl"></i>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">LGPD Compliant</div>
                <div className="text-xs sm:text-sm text-gray-600">Proteção de Dados</div>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-medal-fill text-white text-xl sm:text-2xl"></i>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">Selo RA1000</div>
                <div className="text-xs sm:text-sm text-gray-600">Excelência em Atendimento</div>
              </div>
            </div>
          </div>

          {/* Estatísticas de Confiança */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#9f60fe] mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Uptime</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-[#00e4e3] mb-1 sm:mb-2">4.9/5</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Satisfação</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Empresas</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 sm:mb-2">&lt;1h</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Suporte</div>
            </div>
          </div>
        </div>

        {/* CTA de Confiança */}
        <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              <i className="ri-shield-star-line text-yellow-300 mr-2"></i>
              <span className="font-semibold text-sm sm:text-base">EMPRESA CONFIÁVEL</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Junte-se a mais de 1.000 empresas</h3>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
              Que já transformaram seu atendimento com total segurança e confiança
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="bg-white text-[#9f60fe] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xl w-full sm:w-auto text-center"
              >
                <i className="ri-rocket-line mr-2"></i>Teste Grátis por 7 Dias
              </Link>
              
              <div className="flex items-center space-x-3 sm:space-x-4 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-white text-lg sm:text-xl"></i>
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm sm:text-base">Sem cartão de crédito</div>
                  <div className="text-xs sm:text-sm opacity-80">Cancelamento gratuito</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-xs sm:text-sm">
              <div className="flex items-center">
                <i className="ri-shield-check-line mr-2"></i>
                <span>Dados protegidos</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center">
                <i className="ri-refund-line mr-2"></i>
                <span>Garantia 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
