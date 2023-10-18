import React from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Shared/ProductCard";

const BrandShowcase = () => {
  return (
    <Container className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </Container>
  );
};

export default BrandShowcase;
