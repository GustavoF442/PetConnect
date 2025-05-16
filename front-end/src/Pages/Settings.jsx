import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    name: "João Admin",
    email: "admin@acapra.org",
    darkMode: true,
    notifications: false
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Salvando configurações:", form);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#555086]">Configurações da Conta</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome"
            className="border px-4 py-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="border px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="mr-2"
            />
            Ativar notificações por e-mail
          </label>

          <label className="block mb-2">
            <input
              type="checkbox"
              name="darkMode"
              checked={form.darkMode}
              onChange={handleChange}
              className="mr-2"
            />
            Modo escuro
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#555086] hover:bg-[#443b70] text-white px-6 py-2 rounded"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Settings;
 