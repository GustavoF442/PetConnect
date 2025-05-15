import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#edeafd] to-[#d1cee9] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-[#555086]">
          Faça seu login
        </h1>

        <form className="flex w-full flex-col gap-4">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu e-mail"
            required
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="submit"
            className="bg-[#555086] hover:bg-[#443b70] transition-all w-full cursor-pointer rounded-full px-4 py-2 font-bold text-white"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center">
          Ainda não tem uma conta? {" "}
          <Link to="/register" className="text-[#555086] underline font-semibold">
            Registre-se aqui!
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;
