import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import CartCard from "./CartCard";
import { useLoaderData } from "react-router-dom";

import { BASE_URL } from "../../API/api";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import NoProduct from "../BrandShowcase/NoProduct";

const Cart = () => {
  const initialCartProducts = useLoaderData();
  const { user } = useAuth();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(
      initialCartProducts?.filter(
        (product) => product?.userEmail === user?.email
      )
    );
  }, [initialCartProducts]);

  const handleDeleteFromCart = async (_id) => {
    try {
      const url = `${BASE_URL}/cart/${_id}`;
      const headers = {
        "Content-Type": "application/json",
      };

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await axios.delete(url, headers);

          if (result?.data?.acknowledged) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            setCartProducts(
              cartProducts?.filter((product) => product?._id !== _id)
            );
          }
        }
      });
    } catch (error) {
      axios.delete();
    }
  };

  return (
    <Container className="w-[90%] mx-auto mt-7 min-h-[80vh]">
      <div className="flex flex-col gap-8">
        {cartProducts?.length === 0 && <NoProduct />}

        {cartProducts?.map((product) => (
          <CartCard
            key={product?._id}
            product={product}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        ))}
      </div>
    </Container>
  );
};

export default Cart;
