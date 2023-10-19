import React from "react";
import ProductForm from "../../components/Form/ProductForm";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  return <ProductForm action="put" product={product} />;
};

export default UpdateProduct;
