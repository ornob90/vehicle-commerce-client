import React from "react";
import Container from "../../components/Shared/Container";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <Container className="w-[90%] mx-auto">
      <div className="flex flex-col gap-8">
        <CartCard />
      </div>
    </Container>
  );
};

export default Cart;
