'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://static.readdy.ai/image/b16afbe0e08b9f95eb43181fa2d56848/9d32fa97682d75c500f3a1e648e0dcde.png')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="flex items-center min-h-[calc(100vh-4rem)]">
          <div className="w-full max-w-4xl mx-auto text-center sm:text-left">
            {/* Badge de credibilidade melhorado */}
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 text-xs sm:text-sm shadow-lg">
              <i className="ri-shield-check-fill text-[#00e4e3] mr-2"></i>
              <span className="text-white font-medium">Mais de 1.000 empresas confiam no ZappAssist</span>
              <div className="ml-3 px-2 py-1 bg-green-500/80 rounded-full text-xs font-bold">
                ATIVO
              </div>
            </div>

            {/* Headline principal */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Transforme seu <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">atendimento</span> em resultados reais
            </h1>
            
            {/* Subtítulo com benefício adicional */}
            <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto sm:mx-0">
              Una WhatsApp, Telegram, Facebook, Instagram e Web Chat em uma única plataforma inteligente. 
              <strong className="text-white"> Automatize 80% das respostas</strong>, <strong className="text-white">aumente suas vendas em até 40%</strong> e <strong className="text-[#00e4e3]">economize 5 horas por dia</strong>.
            </p>

            {/* Benefícios principais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <i className="ri-time-line text-white text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base">Resposta em segundos</div>
                  <div className="text-white/80 text-xs sm:text-sm">24/7 automatizado</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <i className="ri-line-chart-line text-white text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base">+40% em vendas</div>
                  <div className="text-white/80 text-xs sm:text-sm">Resultados comprovados</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <i className="ri-shield-check-line text-white text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base">Seguro e confiável</div>
                  <div className="text-white/80 text-xs sm:text-sm">Dados protegidos</div>
                </div>
              </div>
            </div>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
              <Link 
                href="https://chat.zappassist.com.br/#/signup"
                className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl w-full sm:w-auto text-center"
              >
                <i className="ri-rocket-line mr-2 sm:mr-3"></i>
                Teste Grátis por 7 Dias
              </Link>
              
              <div className="flex items-center space-x-4 text-center sm:text-left">
                <div className="text-white">
                  <div className="flex items-center justify-center sm:justify-start mb-1 sm:mb-2">
                    <i className="ri-check-line text-[#00e4e3] mr-2"></i>
                    <span className="font-semibold text-sm sm:text-base">Sem cartão de crédito</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <i className="ri-check-line text-[#00e4e3] mr-2"></i>
                    <span className="font-semibold text-sm sm:text-base">Configuração em 5 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prova social rápida */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mr-3">
                  <i className="ri-building-line text-white text-lg sm:text-xl"></i>
                </div>
                <span className="text-xs sm:text-sm font-medium">+1.000 empresas ativas</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                  <i className="ri-star-fill text-sm sm:text-base"></i>
                </div>
                <span className="text-xs sm:text-sm font-medium">4.9/5 avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-xl sm:text-2xl"></i>
      </div>
    </section>
  );
}