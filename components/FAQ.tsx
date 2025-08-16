
'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é o ZappAssist e para que serve?',
      answer: 'O ZappAssist é uma plataforma que centraliza o atendimento de múltiplos canais — como WhatsApp, Telegram, Facebook, Instagram e Web Chat — em um só lugar. Ele automatiza respostas, organiza conversas e permite que equipes atendam clientes de forma mais rápida e eficiente.'
    },
    {
      question: 'Preciso de cartão de crédito para testar a plataforma?',
      answer: 'Não. O teste gratuito dura 7 dias e não exige cartão de crédito. Durante esse período, você pode explorar a maioria das funcionalidades para avaliar se a plataforma atende às suas necessidades.'
    },
    {
      question: 'Posso agendar mensagens automáticas?',
      answer: 'Sim. É possível agendar mensagens personalizadas para horários específicos, inclusive utilizando variáveis como {nome} e {email}, o que permite enviar campanhas segmentadas de forma mais humana e personalizada.'
    },
    {
      question: 'Quais canais posso integrar?',
      answer: 'Você pode integrar WhatsApp, Telegram, Facebook Messenger, Instagram Direct e Web Chat. A quantidade de canais ativos ao mesmo tempo depende do plano contratado.'
    },
    {
      question: 'O que é o chatbot inteligente por setor?',
      answer: 'É uma funcionalidade que direciona automaticamente cada cliente para o setor correto (ex.: vendas, suporte, financeiro) e responde de forma personalizada, podendo enviar textos, imagens, áudios, botões e listas.'
    },
    {
      question: 'É possível usar inteligência artificial no atendimento?',
      answer: 'Sim. O ZappAssist conta com integração com OpenAI, permitindo criar respostas mais inteligentes e naturais, além de automatizar interações complexas no chatbot.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-[#9f60fe]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o ZappAssist e descubra como nossa plataforma pode transformar seu atendimento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-2xl text-[#9f60fe] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white mb-6 opacity-90">
              Nossa equipe está pronta para esclarecer qualquer questão sobre o ZappAssist
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://wa.me/5535991217758?text=Olá! Tenho dúvidas sobre o ZappAssist"
                className="bg-white text-[#9f60fe] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
              >
                Falar no WhatsApp
              </a>
              <a 
                href="mailto:comercial@zappassist.com.br"
                className="text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#9f60fe] transition-all whitespace-nowrap cursor-pointer"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
