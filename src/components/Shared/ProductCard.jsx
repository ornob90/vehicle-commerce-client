import { Rating } from "@mui/material";
import React from "react";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-4 shadow-[0_0px_5px_rgba(0,0,0,0.12)] p-6">
      <div className="h-[200px] sm:h-[220px] md:h-[210px] lg:h-[170px]  ">
        <img
          src="https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VWXOQDLvEJHhCihgNnErADBLaG7vpHPM7pryTquiLi8="
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">Name</h3>
          <Rating
            name="half-rating-read"
            value={4.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#706F7B]">Audi / Type</p>
          <p className="font-bold text-2xl">$10000</p>
        </div>
        <div className="flex justify-between items-center">
          <Button className="bg-[#FF4D30] text-white px-6 lg:px-7 py-2  font-medium rounded-sm">
            Update
          </Button>
          <Button className="bg-black text-white px-6 lg:px-7 py-2  font-medium rounded-sm">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
