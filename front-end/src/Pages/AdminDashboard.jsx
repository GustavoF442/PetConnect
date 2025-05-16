import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const data = {
    labels: ["Cães", "Gatos", "Outros"],
    datasets: [
      {
        label: "Animais cadastrados",
        data: [60, 30, 10],
        backgroundColor: ["#555086", "#837abf", "#ccc4e0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Cabeçalho com foto e boas-vindas */}
      <div className="flex items-center gap-6 p-4 bg-white rounded-xl shadow">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Foto do Administrador"
          className="h-20 w-20 rounded-full border-4 border-[#555086]"
        />
        <div>
          <h2 className="text-2xl font-bold text-[#555086]">Bem-vindo, João Admin</h2>
          <p className="text-gray-600">Painel administrativo da ACAPRA</p>
        </div>
      </div>

      {/* Gráfico e informações rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-xl col-span-1 xl:col-span-1">
          <h3 className="text-lg font-semibold text-[#555086] mb-2">Distribuição dos Animais</h3>
          <Doughnut data={data} />
        </div>

        <div className="p-4 bg-white shadow rounded-xl col-span-1 xl:col-span-2">
          <h3 className="text-lg font-semibold text-[#555086] mb-2">Resumo</h3>
          <p>Total de animais cadastrados: <strong>100</strong></p>
          <p>Animais adotados: <strong>45</strong></p>
          <p>Animais disponíveis: <strong>55</strong></p>
          <p className="mt-4 text-sm text-gray-500">Estes dados são atualizados automaticamente a cada 24h.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
