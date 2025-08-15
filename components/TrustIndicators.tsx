'use client';

export default function TrustIndicators() {
  const trustSignals = [
    {
      icon: 'ri-shield-check-line',
      title: 'Dados 100% Seguros',
      description: 'Criptografia avançada SSL',
      color: 'text-green-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Uptime 99.9%',
      description: 'Disponibilidade garantida',
      color: 'text-blue-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Suporte 24/7',
      description: 'Atendimento humanizado',
      color: 'text-purple-500'
    },
    {
      icon: 'ri-refund-2-line',
      title: 'Garantia 30 dias',
      description: 'Ou seu dinheiro de volta',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Por que <span className="text-[#9f60fe]">confiar</span> no ZappAssist?
          </h3>
          <p className="text-lg text-gray-600">
            Compromisso total com a segurança e satisfação dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className={`w-16 h-16 ${signal.color} bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${signal.icon} text-2xl`}></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{signal.title}</h4>
              <p className="text-gray-600 text-sm">{signal.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full px-8 py-4">
            <i className="ri-award-line text-[#9f60fe] text-2xl mr-3"></i>
            <div className="text-left">
              <div className="font-bold text-gray-900">Certificado ISO 27001</div>
              <div className="text-sm text-gray-600">Padrão internacional de segurança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}