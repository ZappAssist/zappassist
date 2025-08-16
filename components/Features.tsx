'use client';

import Link from 'next/link';

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#9f60fe]/10 rounded-full px-6 py-2 mb-6">
            <i className="ri-star-line text-[#9f60fe] mr-2"></i>
            <span className="text-[#9f60fe] font-semibold">Funcionalidades Premiadas</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tudo que você precisa para{' '}
            <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">
              dominar o mercado
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ferramentas profissionais que transformam seu atendimento em uma máquina de vendas. 
            Testado e aprovado por mais de 1.000 empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {/* Funcionalidade 1 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-smartphone-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Múltiplos Canais</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Economia de 5h/dia
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              WhatsApp, Telegram, Facebook, Instagram e Web Chat unificados
            </p>
          </div>

          {/* Funcionalidade 2 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-robot-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chatbot Inteligente</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Atendimento 24/7
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              IA avançada que resolve 80% das dúvidas automaticamente
            </p>
          </div>

          {/* Funcionalidade 3 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-calendar-check-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Agendamento Inteligente</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  +150% engajamento
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Campanhas personalizadas com {'{nome}'}, {'{email}'} e mais variáveis
            </p>
          </div>

          {/* Funcionalidade 4 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-team-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Equipe Organizada</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Zero mensagem perdida
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Múltiplos atendentes e setores com distribuição automática
            </p>
          </div>

          {/* Funcionalidade 5 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-kanban-view text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Gestão Visual Kanban</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  +60% produtividade
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Organize seus tickets de forma inteligente para captar novos clientes
            </p>
          </div>

          {/* Funcionalidade 6 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-brain-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">OpenAI Integrada</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Satisfação 95%
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Inteligência não vai faltar com seu OpenAI
            </p>
          </div>

          {/* Funcionalidade 7 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-heart-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integrações Premium</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Automação total
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Disponha de recursos para integração da API com terceiros, como TypeBot
            </p>
          </div>

          {/* Funcionalidade 8 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-price-tag-3-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tags Inteligentes</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Organização perfeita
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Adicione tags para seus atendimentos para melhor gerenciamento
            </p>
          </div>

          {/* Funcionalidade 9 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-flashlight-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mensagens Rápidas</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Resposta instantânea
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Crie mensagens rápidas com adição de atalhos
            </p>
          </div>

          {/* Funcionalidade 10 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-user-add-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Leads Automáticos</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Captura 100%
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Armazenamento de número no chatbot até à sua listagem de contatos
            </p>
          </div>

          {/* Funcionalidade 11 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#9f60fe] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-folder-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Envio de Arquivos</h3>
                <div className="text-xs font-semibold text-[#9f60fe] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Comunicação rica
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Envio de imagens, vídeos, documentos e áudios tudo prático para o seu interagir
            </p>
          </div>

          {/* Funcionalidade 12 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="w-14 h-14 text-[#00e4e3] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-calendar-event-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Campanhas Avançadas</h3>
                <div className="text-xs font-semibold text-[#00e4e3] bg-gray-50 px-2 py-1 rounded-full inline-block">
                  Personalização máxima
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Utilize variáveis como {'{nome}'}, {'{numero}'}, {'{email}'}
            </p>
          </div>
        </div>

        {/* Demonstração visual */}
        <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Veja o ZappAssist em ação</h3>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Interface real da plataforma que já transformou mais de 1.000 negócios
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <img 
              src="https://static.readdy.ai/image/b16afbe0e08b9f95eb43181fa2d56848/78c86fd98e1679a8199819377a4c78b3.png" 
              alt="Interface do ZappAssist" 
              className="w-full rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl"
            />
          </div>

          <Link 
            href="https://wa.me/5535991217758?text=Olá! Quero ver uma demonstração do ZappAssist"
            className="inline-block bg-white text-[#9f60fe] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-play-line mr-2"></i>Ver Demonstração
          </Link>
        </div>

        {/* Comparação */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o <span className="text-[#9f60fe]">ZappAssist</span>?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-close-line text-red-500 text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Soluções Tradicionais</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Vários aplicativos separados</li>
                <li>• Configuração complexa</li>
                <li>• Sem automação inteligente</li>
                <li>• Suporte limitado</li>
              </ul>
            </div>

            <div className="text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] text-white px-4 py-1 rounded-full text-sm font-bold">
                  RECOMENDADO
                </span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">ZappAssist</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="text-[#9f60fe] font-semibold">• Tudo unificado em uma tela</li>
                <li className="text-[#9f60fe] font-semibold">• Configuração em 5 minutos</li>
                <li className="text-[#9f60fe] font-semibold">• IA avançada integrada</li>
                <li className="text-[#9f60fe] font-semibold">• Suporte 24/7</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-question-line text-yellow-500 text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Outras Plataformas</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Recursos básicos</li>
                <li>• Integrações limitadas</li>
                <li>• Preços ocultos</li>
                <li>• Interface desatualizada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}