import React from "react";
import Container from "../../components/Shared/Container";
import CartCard from "./CartCard";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const cartProducts = useLoaderData();

  return (
    <Container className="w-[90%] mx-auto mt-7">
      <div className="flex flex-col gap-8">
        {cartProducts?.map((product) => (
          <CartCard key={product?._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Cart;
