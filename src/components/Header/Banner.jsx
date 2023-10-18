import React from "react";
import Container from "../Shared/Container";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-5 min-h-[300px] pt-14 bg-gradient-to-r from-white to-[#FFEDEA] gap-8 md:gap-0">
      <div className=" md:col-span-2 flex flex-col justify-center  gap-4 w-[90%] mx-auto">
        <h3 className="text-md sm:text-lg lg:text-xl font-semibold ">
          Discover Excellence in Driving
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          Explore <span className="text-[#FF4D30]">Luxury</span> and{" "}
          <span className="text-[#FF4D30]">Performance</span>
        </h1>
        <p className="text-[#706F7B] text-sm lg:text-base">
          Find your perfect ride from our wide range of top-notch vehicles.
          Experience the pinnacle of engineering, style, and comfort
        </p>

        <div>
          <Button className="bg-[#FF4D30] text-white px-6 lg:px-8 py-2 lg:py-3 font-medium rounded-sm">
            View Brands
          </Button>
        </div>
      </div>
      <div className="md:col-span-3">
        <img
          src="https://i.ibb.co/9HY4fYX/main-car-9b30faa59387879fa060.png"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Banner;
