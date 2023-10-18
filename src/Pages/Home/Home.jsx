import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Header/Banner";
import BrandSection from "./BrandSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const brands = useLoaderData();

  //   console.log(brands);

  return (
    <div>
      <Banner />
      <BrandSection brands={brands} />
    </div>
  );
};

export default Home;
