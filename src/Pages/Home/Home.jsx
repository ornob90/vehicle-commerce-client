import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Header/Banner";
import BrandSection from "./BrandSection";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  const brands = useLoaderData();

  //   console.log(brands);

  return (
    <div>
      <Banner />
      <BrandSection brands={brands} />
      <TestimonialSection />
    </div>
  );
};

export default Home;
