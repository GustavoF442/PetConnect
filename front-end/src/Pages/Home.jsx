import React from "react";
import Item from "../components/Item";
import BannerHero from "../components/BannerHero";
import Parceiros from "../components/Parceiros";

const Home = () => {
  return (
    <section>
      <BannerHero />
      <Parceiros />
      <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
