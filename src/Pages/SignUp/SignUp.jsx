import Button from "../../components/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Shared/Container";

import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpMethod } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      setErrorMsg("Password Length Must Be More Then 6 Characters!!");
      return;
    }

    if (/^[^A-Z]*$/.test(password)) {
      setErrorMsg("Password must contain atleast one capital letter");
      return;
    }

    if (/^[a-zA-Z0-9\s]*$/.test(password)) {
      setErrorMsg("Password must contain a special character");
      return;
    }

    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
    e.target.photo.value = "";

    signUpMethod(email, password)
      .then((res) => {
        setErrorMsg("");
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
        Swal.fire({
          icon: "success",
          title: "You have successfully Registered",
          showConfirmButton: true,
          timer: 1500,
        });
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <Container className="min-h-screen w-full bg-banner relative min-w-screen  flex justify-center items-center">
      <div className="backdrop-blur-md	 p-4  flex flex-col gap-4 rounded-xl   w-[70%] sm:w-[50%] md:w-[40%] lg:w-[26%] border border-white text-white">
        <p className="text-center text-3xl font-[900]">Sign Up</p>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
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
          <div className="relative ">
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600 w-full"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              name="password"
            />

            {showPass ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[32%] right-[3%] text-xl"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[32%] right-[3%] text-xl"
              />
            )}
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <Button className="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
            Sign Up
          </Button>
        </form>
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
