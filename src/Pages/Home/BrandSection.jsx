import React from "react";
import Container from "../../components/Shared/Container";
import SectionHeader from "../../components/Shared/SectionHeader";
import { useNavigate } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

const BrandSection = ({ brands }) => {
  // console.log(brands);
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <Container className="" id="brands" name="brands">
      <div className="w-[90%] mx-auto">
        <SectionHeader
          header="Our Trusted Brands"
          desc="Explore top car brands known for style, performance, and innovation on our platform."
        />

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brands?.map(({ brand, brandImg }, idx) => (
            <div
              onClick={() => navigate(`brand/${brand}`)}
              key={brand}
              className={`p-4 flex flex-col justify-center items-center hover:scale-[.98] duration-300 shadow-[0_0px_5px_rgba(0,0,0,0.12)] border border-[#FFEDEA]  ${
                isDark
                  ? "bg-gradient-to-r from-[#333333] to-[#444444] text-[#CCCCCC]"
                  : "bg-gradient-to-r from-white to-[#dfdfdf] text-[#676769]"
              }  gap-8 md:gap-0`}
            >
              <div className="h-[200px] ">
                <img
                  src={brandImg}
                  alt=""
                  className={`w-full ${
                    idx > 1 && idx < 5 ? "h-[75%]" : "h-[90%]"
                  } object-contain`}
                />
              </div>
              <h3 className="font-medium text-3xl">{brand}</h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrandSection;
