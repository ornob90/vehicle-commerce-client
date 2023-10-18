import React from "react";
import Container from "../../components/Shared/Container";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <Container className="w-[90%] mx-auto mt-7">
      <div className="flex flex-col gap-8">
        <CartCard />
      </div>
    </Container>
  );
};

export default Cart;
