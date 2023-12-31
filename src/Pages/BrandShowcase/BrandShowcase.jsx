import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import ProductCard from "../../components/Shared/ProductCard";
import Slider from "./Slider";
import { useLoaderData, useParams } from "react-router-dom";
import { BASE_URL } from "../../API/api";
import NoProduct from "./NoProduct";

const BrandShowcase = () => {
  const brands = useLoaderData();
  const { category } = useParams();

  const [sliderAds, setSliderAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(brands);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/ads/${category}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]?.adsUrls);
        setSliderAds(data[0]?.adsUrls);
        setLoading(false);
      });

    // console.log(sliderAds);
  }, [category]);

  return (
    <Container
      className="w-[90%] mx
    -auto mt-2"
    >
      <Slider ads={sliderAds} loading={loading} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {brands?.length > 0 &&
          brands?.map((brand) => (
            <ProductCard key={brand?._id} brand={brand} />
          ))}

        {brands?.length === 0 && <NoProduct brand={category} />}
      </div>
    </Container>
  );
};

export default BrandShowcase;
