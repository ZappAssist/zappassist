'use client';

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-award-line text-white text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">Premiado</div>
            <div className="text-gray-600">Funcionalidades Reconhecidas</div>
          </div>

          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-building-line text-white text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">+1.000</div>
            <div className="text-gray-600">Empresas Ativas</div>
          </div>

          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#9f60fe] to-[#00e4e3] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-star-fill text-white text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação dos Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
}