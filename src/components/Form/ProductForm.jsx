import React from "react";
import Container from "../../components/Shared/Container";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Button from "../../components/Shared/Button";
import axios from "axios";
import { BASE_URL } from "../../API/api";

const ProductForm = ({ action, product }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const category = e.target.brand.value;
    const name = e.target.name.value;
    const shortdescription = e.target.desc.value;
    const price = e.target.price.value;
    const horsepower = e.target.horsepower.value;
    const type = e.target.type.value;
    const image = e.target.url.value;
    const rating = e.target.rating.value;
    const highwayMileage = e.target["highway-mileage"].value;
    const cityMileage = e.target["city-mileage"].value;

    const mileage = `${cityMileage} mpg (city) / ${highwayMileage} mpg (highway)`;

    const productData = {
      category,
      name,
      shortdescription,
      price,
      horsepower,
      type,
      image,
      rating,
      mileage,
    };

    try {
      let result = "";

      if (action === "post") {
        const url = BASE_URL + "/product";

        result = await axios.post(url, productData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const url = BASE_URL + `/products/${product?._id}`;
        result = await axios.put(url, productData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="min-h-[300px]">
      <form
        className="grid grid-cols-1 md:grid-cols-6 md:grid-row-6 gap-4 w-[80%] lg:w-[70%] mx-auto mt-16"
        onSubmit={handleFormSubmit}
      >
        <TextField
          value={product?.category || ""}
          required
          name="brand"
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          className="md:col-span-3 md:row-span-1"
        />

        <TextField
          value={product?.name || ""}
          required
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="md:col-span-3 md:row-span-1"
        />
        <TextareaAutosize
          value={product?.shortdescription || ""}
          required
          name="desc"
          aria-label="minimum height"
          minRows={3}
          placeholder="Description"
          className="md:col-span-6 md:row-span-2 border border-[#212121]/30 focus:outline-none pl-3 py-2 text-[#666666] rounded-md"
        />
        <TextField
          value={product?.price || ""}
          required
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          className="md:col-span-2 md:row-span-1"
          type="number"
        />
        <TextField
          value={product?.horsepower || ""}
          required
          name="horsepower"
          id="outlined-basic"
          label="Horsepower"
          variant="outlined"
          className="md:col-span-2 md:row-span-1"
          type="number"
        />
        <TextField
          value={product?.type || ""}
          required
          name="type"
          id="outlined-basic"
          label="Type"
          variant="outlined"
          className="md:col-span-2 md:row-span-1"
        />
        <TextField
          value={product?.image || ""}
          required
          name="url"
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          className="md:col-span-4 md:row-span-1"
        />
        <TextField
          value={product?.rating || ""}
          required
          name="rating"
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          className="md:col-span-2 md:row-span-1"
          type="number"
          min={0}
          max={5}
        />
        <TextField
          value={product?.mileage.split("/")[1].split(" ")[1] || ""}
          required
          name="highway-mileage"
          id="outlined-basic"
          label="Highway Mileage"
          variant="outlined"
          className="md:col-span-3 md:row-span-1"
          type="number"
        />
        <TextField
          value={product?.mileage.split("/")[0].split(" ")[0] || ""}
          required
          name="city-mileage"
          id="outlined-basic"
          label="City Mileage"
          variant="outlined"
          className="md:col-span-3 md:row-span-1"
          type="number"
        />
        <Button className="md:col-span-6 bg-black text-white py-3 rounded-md">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
