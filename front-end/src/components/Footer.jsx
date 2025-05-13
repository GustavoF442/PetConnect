import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-400 text-white mt-10 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 flex flex-col md:flex-row justify-between items-start gap-8">


        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src="../src/img/logoroxa.png"
              alt="Logo da Acapra"
              className="h-10 w-12 rounded-lg"
            />
            <span className="text-2xl font-bold">ACAPRA</span>
          </div>
          <p className="text-sm text-white/90">
            A ACAPRA é um projeto que conecta pessoas e animais por meio da adoção responsável. Apoie essa causa!
          </p>
        </div>

        {/* Coluna: Institucional */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Institucional</h4>
          <Link to="#" className="hover:underline text-sm">Sobre a ACAPRA</Link>
          <Link to="#" className="hover:underline text-sm">Projetos sociais</Link>
          <Link to="#" className="hover:underline text-sm">Transparência</Link>
          <Link to="#" className="hover:underline text-sm">Unidades</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Como Ajudar?</h4>
          <Link to="#" className="hover:underline text-sm">Quero Adotar</Link>
          <Link to="#" className="hover:underline text-sm">Quero Doar</Link>
          <Link to="#" className="hover:underline text-sm">ONGs / Protetores</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;