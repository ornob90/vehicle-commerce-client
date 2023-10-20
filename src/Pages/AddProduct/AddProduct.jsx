import React from "react";
import ProductForm from "../../components/Form/ProductForm";
import SectionHeader from "../../components/Shared/SectionHeader";

const AddProduct = () => {
  return (
    <div>
      <div className="pt-20 md:pt-10 md:mb-10 mx-auto flex flex-col  justify-center items-center gap-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Add Your Product</h1>
      </div>
      <ProductForm action="post" />
    </div>
  );
};

export default AddProduct;
