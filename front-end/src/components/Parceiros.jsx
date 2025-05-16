import React from "react";

const Parceiros = () => {
  const logos = [
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    "https://www.unifebe.edu.br/site/wp-content/uploads/unifebe-logo-vertical.png",
    
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-[#555086] mb-8">Nossos Parceiros</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-18 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
