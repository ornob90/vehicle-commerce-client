import React from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Shared/ProductCard";
import Slider from "./Slider";

const BrandShowcase = () => {
  const ads = [
    {
      id: 1,
      img: "https://pbs.twimg.com/media/EEAVu-hU4AAWqiK.jpg",
    },
    {
      id: 2,
      img: "https://static.toyotabharat.com/images/showroom/glanza/glanza-banner-1920x807.jpg",
    },
    {
      id: 3,
      img: "https://di-uploads-pod9.dealerinspire.com/johnelwayscrowntoyota/uploads/2022/12/Banner_Toyota.png",
    },
  ];

  return (
    <Container
      className="w-[90%] mx
    -auto mt-2"
    >
      <Slider ads={ads} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </Container>
  );
};

export default BrandShowcase;
