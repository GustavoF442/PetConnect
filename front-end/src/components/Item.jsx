import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="src/img/Dog2.jpeg"
        alt="Animal"
        className="aspect-square rounded-4xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold">Brusque, Santa Catarina</h3>
        <p className="truncate text-gray-600">
          GATINHO GATINHO GATINHO GATINHOGATINHO GATINHOGATINHO GATINHO
          GATINHO GATINHOGATINHO GATINHOGATINHO GATINHOGATINHO GATINHOGATINHO GATINHO
          GATINHO GATINHOGATINHO GATINHOGATINHO GATINHOGATINHO GATINHOGATINHO GATINHO
        </p>
      </div>

      <p>
        <span className="font-semibold"> ADOTE JÁ</span> pertinho de você
      </p>
    </a>
  );
};

export default Item;
