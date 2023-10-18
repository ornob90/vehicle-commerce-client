import React from "react";
import Container from "../../components/Shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";

const Details = () => {
  return (
    <Container className="w-[90%] mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">
          <img
            src="https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VWXOQDLvEJHhCihgNnErADBLaG7vpHPM7pryTquiLi8="
            alt=""
          />
        </div>
        <div className=" md:col-span-2 flex flex-col gap-4 justify-evenly">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-3xl">Name</h3>
              {/* <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              /> */}
            </div>
            <p className="text-[#706F7B] my-4">Audi / Type</p>
            <Rating
              name="half-rating-read"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              rem dicta quam asperiores dignissimos libero?
            </p>
          </div>

          <Button className="bg-black text-white px-6 lg:px-7 py-2  font-medium rounded-sm">
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-[#FF4D30] shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          $10000
        </p>
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-[#FF4D30] shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          496 Horsepower
        </p>
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-[#FF4D30] shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          17 mpg (city)
        </p>
      </div>
    </Container>
  );
};

export default Details;
