import React from "react";

const BannerHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#555086] to-[#d7d7d6] px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[500px] py-12">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left space-y-4 text-white">
          <h2 className="text-4xl font-bold">
            Para uma casa <span className="text-orange-400">mais feliz</span>
          </h2>
          <h3 className="text-3xl font-bold text-yellow-400">Adote com amor</h3>
          <p className="text-gray-200 max-w-md mx-auto lg:mx-0">
            Dê uma nova chance a um animalzinho. Cadastre-se, conheça os pets e
            transforme duas vidas de uma só vez.
          </p>
          <button className="bg-white text-[#555086] font-semibold px-6 py-3 rounded-full mt-2 hover:bg-gray-100 transition">
            Quero saber mais
          </button>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center h-full">
          <img
            src="src/img/bannerdog.png"
            alt="Cachorra feliz"
            className="object-contain h-[400px] sm:h-[460px] lg:h-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
