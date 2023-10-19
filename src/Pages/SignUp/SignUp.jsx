import React from "react";
import Button from "../../components/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Shared/Container";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Container className="min-h-screen w-full bg-banner relative min-w-screen  flex justify-center items-center">
      <div className="backdrop-blur-md	 p-4  flex flex-col gap-4 rounded-xl   w-[70%] sm:w-[50%] md:w-[40%] lg:w-[26%] border border-white text-white">
        <p className="text-center text-3xl font-[900]">Sign Up</p>
        <form
          className="flex flex-col gap-4"
          // onSubmit={handleSignUp}
        >
          <input
            required
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600"
            type="text"
            placeholder="User Name"
            name="name"
          />
          <input
            required
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600"
            type="text"
            placeholder="Photo URL"
            name="photo"
          />
          <input
            required
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            required
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600"
            type="password"
            placeholder="Password"
            name="password"
          />

          <Button className="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
            Sign Up
          </Button>
        </form>
        <p className="text-red-600 text-sm">Error Message</p>
        <div className="flex justify-left gap-2 items-center text-[12px] ">
          <p>Already have an account?</p>
          <Link
            className=" active:scale-95 duration-300 cursor-pointer font-bold text-blue-600"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
