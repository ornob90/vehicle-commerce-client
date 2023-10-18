import React from "react";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";

const CartCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-3">
        <img
          src="https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=VWXOQDLvEJHhCihgNnErADBLaG7vpHPM7pryTquiLi8="
          alt=""
        />
      </div>
      <div className=" md:col-span-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-3xl">Name</h3>
          <Rating
            name="half-rating-read"
            value={4.5}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="text-[#706F7B]">Audi / Type</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, rem
          dicta quam asperiores dignissimos libero?
        </p>
        <p>
          <span className="font-bold">Horsepower:</span> 300
        </p>
        <p>
          <span className="font-bold">Mileage:</span> 30 mpg (city) / 41 mpg
          (highway)
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl text-[#FF4D30]">$10000</p>
          <Button className="bg-black text-white px-6 lg:px-7 py-2  font-medium rounded-sm">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
