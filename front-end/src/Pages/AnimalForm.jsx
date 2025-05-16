import React, { useState } from "react";

const AnimalForm = () => {
  const [form, setForm] = useState({
    name: "",
    species: "",
    location: "",
    photo: "",
    description: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do animal:", form);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#555086] mb-4">Cadastrar Animal</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} className="border px-4 py-2" />
        <input type="text" name="species" placeholder="Espécie" onChange={handleChange} className="border px-4 py-2" />
        <input type="text" name="location" placeholder="Localização" onChange={handleChange} className="border px-4 py-2" />
        <input type="url" name="photo" placeholder="URL da Foto" onChange={handleChange} className="border px-4 py-2" />
        <textarea name="description" placeholder="Descrição" onChange={handleChange} className="md:col-span-2 border px-4 py-2" />
        <button type="submit" className="md:col-span-2 bg-[#555086] text-white px-6 py-2 rounded">Salvar</button>
      </form>
    </div>
  );
};

export default AnimalForm;
 