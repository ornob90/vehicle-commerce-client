import React from "react";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";
import { useNavigate } from "react-router-dom";

const CartCard = ({ product }) => {
  const {
    _id,
    image,
    horsepower,
    mileage,
    price,
    rating,
    name,
    type,
    category,
    shortdescription,
  } = product || {};

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-3">
        <img src={image} alt="" />
      </div>
      <div className=" md:col-span-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-3xl">{name}</h3>
          <Rating
            name="half-rating-read"
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <p className="text-[#706F7B]">
          {category} / {type}
        </p>
        <p>{shortdescription}</p>
        <p>
          <span className="font-bold">Horsepower:</span> {horsepower}
        </p>
        <p>
          <span className="font-bold">Mileage:</span> {mileage}
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl text-[#FF4D30]">${price}</p>
          <Button
            type="button"
            className="bg-black text-white px-6 lg:px-7 py-2  font-medium rounded-sm"
            onClick={() => navigate(`/products/${_id}`)}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
