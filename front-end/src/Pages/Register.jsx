import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    state: "",
    address: "",
    housingType: "",
    hasYard: "",
    hasOtherPets: "",
    petExperience: "",
    reasonForAdoption: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Integrar API de CADASTRO
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#edeafd] to-[#d1cee9] p-4">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl rounded-2xl bg-white p-10 shadow-2xl"
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-[#555086]">
          Cadastro para Adoção de Animais
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone para contato"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={formData.city}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="Estado (UF)"
            value={formData.state}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço completo"
            value={formData.address}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 rounded-lg border border-gray-300 px-4 py-2"
            required
          />

          <select
            name="housingType"
            value={formData.housingType}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Tipo de moradia</option>
            <option value="Casa com quintal">Casa com quintal</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa sem quintal">Casa sem quintal</option>
            <option value="Sítio ou fazenda">Sítio ou fazenda</option>
          </select>

          <select
            name="hasYard"
            value={formData.hasYard}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Possui área externa (quintal)?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <select
            name="hasOtherPets"
            value={formData.hasOtherPets}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2"
            required
          >
            <option value="">Já possui outros animais?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <textarea
            name="petExperience"
            placeholder="Possui experiência com animais? Descreva."
            value={formData.petExperience}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 rounded-lg border border-gray-300 px-4 py-2"
            rows="3"
          />

          <textarea
            name="reasonForAdoption"
            placeholder="Por que deseja adotar um animalzinho?"
            value={formData.reasonForAdoption}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 rounded-lg border border-gray-300 px-4 py-2"
            rows="3"
            required
          />

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-[#555086] hover:bg-[#443b70] transition-all text-white font-bold rounded-lg py-3"
          >
            Enviar Cadastro
          </button>
        </form>

        <p className="mt-6 text-center">
          Já possui uma conta? {" "}
          <Link to="/login" className="text-[#555086] underline font-semibold">
            Faça login aqui
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;