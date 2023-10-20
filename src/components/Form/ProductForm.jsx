import React, { useState } from "react";
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
  const [category, setCategory] = useState(product?.category || "");
  const [name, setName] = useState(product?.name || "");
  const [shortdescription, setShortDescription] = useState(
    product?.shortdescription || ""
  );
  const [price, setPrice] = useState(product?.price || "");
  const [horsepower, setHorsepower] = useState(product?.horsepower || "");
  const [type, setType] = useState(product?.type || "");
  const [image, setImage] = useState(product?.image || "");
  const [rating, setRating] = useState(product?.rating || "");
  const [cityMileage, setCityMileage] = useState(
    product?.mileage.split("/")[0].split(" ")[0] || ""
  );
  const [highwayMileage, setHighwayMileage] = useState(
    product?.mileage.split("/")[1].split(" ")[1] || ""
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="min-h-[300px] mb-10">
      <form
        className=" grid grid-cols-1 md:grid-cols-6 md:grid-row-6 gap-4 w-[80%] lg:w-[70%] mx-auto pt-16"
        onSubmit={handleFormSubmit}
      >
        <TextField
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
          name="brand"
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          className=" md:z-0 md:col-span-3 md:row-span-1"
        />

        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className=" md:z-0 md:col-span-3 md:row-span-1"
        />
        <TextareaAutosize
          onChange={(e) => setShortDescription(e.target.value)}
          value={shortdescription}
          required
          name="desc"
          aria-label="minimum height"
          minRows={3}
          placeholder="Description"
          className="md:col-span-6 md:row-span-2 border border-[#212121]/30 focus:outline-none pl-3 py-2 text-[#666666] rounded-md"
        />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
          name="price"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          className=" md:col-span-2 md:row-span-1"
          type="number"
        />
        <TextField
          onChange={(e) => setHorsepower(e.target.value)}
          value={horsepower}
          required
          name="horsepower"
          id="outlined-basic"
          label="Horsepower"
          variant="outlined"
          className=" md:col-span-2 md:row-span-1"
          type="number"
        />
        <TextField
          onChange={(e) => setType(e.target.value)}
          value={type}
          required
          name="type"
          id="outlined-basic"
          label="Type"
          variant="outlined"
          className=" md:col-span-2 md:row-span-1"
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          value={image}
          required
          name="url"
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          className=" md:col-span-4 md:row-span-1"
        />
        <TextField
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          required
          name="rating"
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          className=" md:col-span-2 md:row-span-1"
          type="number"
          min={0}
          max={5}
        />
        <TextField
          onChange={(e) => setHighwayMileage(e.target.value)}
          value={highwayMileage}
          required
          name="highway-mileage"
          id="outlined-basic"
          label="Highway Mileage"
          variant="outlined"
          className=" md:col-span-3 md:row-span-1"
          type="number"
        />
        <TextField
          onChange={(e) => setCityMileage(e.target.value)}
          value={cityMileage}
          required
          name="city-mileage"
          id="outlined-basic"
          label="City Mileage"
          variant="outlined"
          className=" md:col-span-3 md:row-span-1"
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
