
'use client';

import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: 'ri-smartphone-line',
      title: 'Múltiplos Canais',
      description: 'WhatsApp, Telegram, Facebook, Instagram e Web Chat unificados',
      color: 'text-[#9f60fe]',
      benefit: 'Economia de 5h/dia'
    },
    {
      icon: 'ri-robot-line',
      title: 'Chatbot Inteligente',
      description: 'IA avançada que resolve 80% das dúvidas automaticamente',
      color: 'text-[#00e4e3]',
      benefit: 'Atendimento 24/7'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Agendamento Inteligente',
      description: 'Campanhas personalizadas com {nome}, {email} e mais variáveis',
      color: 'text-[#9f60fe]',
      benefit: '+150% engajamento'
    },
    {
      icon: 'ri-team-line',
      title: 'Equipe Organizada',
      description: 'Múltiplos atendentes e setores com distribuição automática',
      color: 'text-[#00e4e3]',
      benefit: 'Zero mensagem perdida'
    },
    {
      icon: 'ri-kanban-view',
      title: 'Gestão Visual Kanban',
      description: 'Organize seus tickets de forma inteligente para captar novos clientes',
      color: 'text-[#9f60fe]',
      benefit: '+60% produtividade'
    },
    {
      icon: 'ri-brain-line',
      title: 'OpenAI Integrada',
      description: 'Inteligência não vai faltar com seu OpenAI',
      color: 'text-[#00e4e3]',
      benefit: 'Satisfação 95%'
    },
    {
      icon: 'ri-heart-line',
      title: 'Integrações Premium',
      description: 'Disponha de recursos para integração da API com terceiros, como TypeBot',
      color: 'text-[#9f60fe]',
      benefit: 'Automação total'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Tags Inteligentes',
      description: 'Adicione tags para seus atendimentos para melhor gerenciamento',
      color: 'text-[#00e4e3]',
      benefit: 'Organização perfeita'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Mensagens Rápidas',
      description: 'Crie mensagens rápidas com adição de atalhos',
      color: 'text-[#9f60fe]',
      benefit: 'Resposta instantânea'
    },
    {
      icon: 'ri-user-add-line',
      title: 'Leads Automáticos',
      description: 'Armazenamento de número no chatbot até à sua listagem de contatos',
      color: 'text-[#00e4e3]',
      benefit: 'Captura 100%'
    },
    {
      icon: 'ri-folder-line',
      title: 'Envio de Arquivos',
      description: 'Envio de imagens, vídeos, documentos e áudios tudo prático para o seu interagir',
      color: 'text-[#9f60fe]',
      benefit: 'Comunicação rica'
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Campanhas Avançadas',
      description: 'Utilize variáveis como {nome}, {numero}, {email}',
      color: 'text-[#00e4e3]',
      benefit: 'Personalização máxima'
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header melhorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#9f60fe]/10 rounded-full px-6 py-2 mb-6">
            <i className="ri-star-line text-[#9f60fe] mr-2"></i>
            <span className="text-[#9f60fe] font-semibold">Funcionalidades Premiadas</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tudo que você precisa para <span className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] bg-clip-text text-transparent">dominar o mercado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ferramentas profissionais que transformam seu atendimento em uma máquina de vendas. 
            Testado e aprovado por mais de 1.000 empresas.
          </p>
        </div>

        {/* Features grid melhorado - agora com 4 colunas para acomodar mais recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className={`w-14 h-14 ${feature.color} flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <div className={`text-xs font-semibold ${feature.color} bg-gray-50 px-2 py-1 rounded-full inline-block`}>
                    {feature.benefit}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
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
            <i className="ri-play-line mr-2"></i>
            Ver Demonstração
          </Link>
        </div>

        {/* Comparação com concorrentes */}
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
