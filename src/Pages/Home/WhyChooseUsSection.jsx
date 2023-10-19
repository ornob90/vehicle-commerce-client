import React from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { AiFillCar, AiOutlineDollar } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import SectionHeader from "../../components/Shared/SectionHeader";
import useTheme from "../../Hooks/useTheme";

const WhyChooseUsSection = () => {
  const { isDark } = useTheme();

  const reasons = [
    {
      icon: <AiFillCar />,
      header: "Cross Country Drive",
      desc: "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
    },
    {
      icon: <AiOutlineDollar />,
      header: "All Inclusive Pricing",
      desc: "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
    },
    {
      icon: <GiPayMoney />,
      header: "No Hidden Charges",
      desc: "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
    },
  ];

  return (
    <Container className="">
      <SectionHeader header="Why Choose Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[300px] pt-14  gap-8 md:gap-0 w-[95%] mx-auto">
        <div className="flex flex-col justify-center  gap-4 w-[90%] mx-auto">
          <h3 className="text-md sm:text-lg lg:text-xl font-semibold ">
            Why Choose Us
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Best valued deals you will ever find
          </h1>
          <p
            className={`text-[#706F7B] text-sm lg:text-base ${
              isDark ? "text-[#CCCCCC] " : "text-[#706F7B]"
            }`}
          >
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>

          <div>
            <Button className="bg-[#FF4D30] text-white px-6 lg:px-8 py-2 lg:py-3 font-medium rounded-sm">
              Find Details
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[90%] md:w-full mx-auto gap-4">
          {reasons.map(({ icon, header, desc }) => (
            <div key={header} className="flex justify-end gap-4 items-center">
              <div className="text-[#FF4D30] text-6xl">{icon}</div>
              <div className="flex flex-col gap-3 w-[90%] md:w-[70%]">
                <h2 className="font-bold text-xl">{header}</h2>
                <p
                  className={`text-sm md:text-base text-[#706F7B] ${
                    isDark ? "text-[#CCCCCC]" : "text-[#706F7B]"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUsSection;
