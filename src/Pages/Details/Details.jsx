import React, { useState } from "react";
import Container from "../../components/Shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BASE_URL } from "../../API/api";
import axios from "axios";
import Swal from "sweetalert2";

const Details = () => {
  const {
    category,
    horsepower,
    image,
    mileage,
    name,
    price,
    rating,
    shortdescription,
    type,
  } = useLoaderData() || {};

  const { user } = useAuth();

  const handleAddToCart = async () => {
    const cartProduct = {
      category,
      horsepower,
      image,
      mileage,
      name,
      price,
      rating,
      shortdescription,
      type,
      userEmail: user?.email,
    };

    try {
      const url = `${BASE_URL}/carts`;

      const result = await axios.post(url, cartProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result?.data?.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Product Added To The Cart",
          showConfirmButton: true,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="w-[90%] mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">
          <img src={image} alt="" />
        </div>
        <div className=" md:col-span-2 flex flex-col gap-4 justify-evenly">
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-3xl">{name}</h3>
              {/* <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              /> */}
            </div>
            <p className="text-[#706F7B] my-4">
              {category} / {type}
            </p>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
            <p className="mt-8">{shortdescription}</p>
          </div>
          <p className="font-bold text-2xl">${price}</p>
          <Button
            type="button"
            onClick={handleAddToCart}
            className="bg-black text-white px-6 lg:px-7 py-2  font-medium rounded-sm"
          >
            Add To Cart
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-[#FF4D30] shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          {horsepower} Horsepower
        </p>
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-black shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          {mileage?.split("/")[1]}
        </p>
        <p className="text-center font-bold text-2xl shad py-5 text-white bg-[#FF4D30] shadow-[0_0px_5px_rgba(0,0,0,0.5)] gap-8 md:gap-0 ">
          {mileage?.split("/")[0]}
        </p>
      </div>
    </Container>
  );
};

export default Details;
