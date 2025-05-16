import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Simulação de login do admin
  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Aqui você pode validar as credenciais depois
    navigate("/admin"); // redireciona para o painel admin
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#edeafd] to-[#d1cee9] px-4">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Login comum */}
        <div className="flex flex-1 flex-col items-center gap-4 bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-[#555086]">Login de Usuário</h1>
          <form className="flex w-full flex-col gap-3">
            <input
              type="email"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="Digite seu e-mail"
            />
            <input
              type="password"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="Digite sua senha"
            />
            <button className="bg-[#555086] w-full rounded-full px-4 py-2 font-bold text-white hover:bg-[#443b70] transition">
              Entrar
            </button>
          </form>
          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="font-semibold underline text-[#555086]">
              Registre-se aqui!
            </Link>
          </p>
        </div>

        {/* Login administrador */}
        <div className="flex flex-1 flex-col items-center gap-4 bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-[#555086]">Login de Admin</h1>
          <form className="flex w-full flex-col gap-3" onSubmit={handleAdminLogin}>
            <input
              type="email"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="E-mail do administrador"
            />
            <input
              type="password"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="Senha administrativa"
            />
            <button
              type="submit"
              className="bg-[#555086] w-full rounded-full px-4 py-2 font-bold text-white hover:bg-[#443b70] transition"
            >
              Entrar como Admin
            </button>
          </form>
          <p className="text-sm text-gray-500">Acesso restrito aos gestores da plataforma.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
