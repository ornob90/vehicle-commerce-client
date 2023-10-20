import React from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { useNavigate } from "react-router-dom";

const NoProduct = ({ brand, desc }) => {
  const navigate = useNavigate();

  return (
    <Container className="">
      <div className=" flex flex-col justify-center items-center gap-6  w-[90vw] min-h-[80vh]">
        <h1 className="font-bold text-[#706F7B] text-6xl lg:text-4xl ">
          No Product To SHOW
        </h1>
        <h3 className="text-md lg:text-xl text-black font-bold"></h3>
        <p className="text-sm lg:text-base w-[60%] text-center">
          Currently, there are no cars available for {brand}. Check back later
          for updates
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-white text-black  py-2 px-4  duration-[.3s] text-sm lg:text-base border border-black hover:bg-black hover:text-white "
        >
          GO TO HOMEPAGE
        </Button>
      </div>
    </Container>
  );
};

export default NoProduct;
