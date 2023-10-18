import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Header/Banner";
import BrandSection from "./BrandSection";
import { useLoaderData } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

const Home = () => {
  const brands = useLoaderData();

  //   console.log(brands);

  return (
    <div>
      <Banner />
      <BrandSection brands={brands} />
      <WhyChooseUsSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
