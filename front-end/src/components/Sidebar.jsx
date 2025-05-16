import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 min-h-screen bg-[#555086] text-white p-6 space-y-6">
    <h2 className="text-xl font-bold">Admin</h2>
    <nav className="flex flex-col gap-4">
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/animals">Animais</Link>
      <Link to="/admin/profile">Meus dados</Link>
      <Link to="/admin/settings">Configurações</Link>
    </nav>
  </aside>
);

export default Sidebar;
