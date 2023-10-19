import React, { useContext, useRef, useState } from "react";
import Container from "../../components/Shared/Container";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Shared/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { signInMethod, googleSignInMethod } = useContext(AuthContext);
  const emailRef = useRef();
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";

    signInMethod(email, password)
      .then((res) => {
        setErrorMsg("");

        Swal.fire({
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
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
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignInMethod()
      .then((res) => {
        setErrorMsg("");
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
        <p className="text-center text-white text-3xl font-[900]">Login</p>
        <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
          <input
            required
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none bg-transparent border border-gray-600"
            type="email"
            placeholder="Enter Email"
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

          <p className="w-max text-[12px]  active:scale-95 duration-300 cursor-pointer">
            Forget Password
          </p>
          <Button className="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
            Sign In
          </Button>
        </form>
        <div className="flex justify-left gap-2 items-center text-[12px] ">
          <p>New Here?</p>
          <Link
            className=" active:scale-95 duration-300 cursor-pointer font-bold text-blue-600"
            onClick={() => navigate("/signup")}
          >
            Register
          </Link>
        </div>
        <div className="flex gap-2 w-full items-center justify-between">
          <hr className="border border-gray-400 w-[35%]" />
          <p className="text-[8px] md:text-sm">Login With</p>
          <hr className="border border-gray-400 w-[35%]" />
        </div>

        {/* <div className="flex justify-evenly items-center  text-3xl">
            <BsFacebook className=" cursor-pointer text-blue-600 " />
            <FcGoogle className=" cursor-pointer " />
            <AiFillTwitterCircle className="text-blue-600 text-4xl cursor-pointer " />
          </div> */}
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center bg-blue-600 text-white rounded-lg justify-center text-sm md:text-base cursor-pointer active:scale-95 duration-[.35s]"
        >
          <div className="h-full py-1 px-2 rounded-l-lg flex justify-center items-center gap-4">
            <FcGoogle className=" cursor-pointer text-3xl" />
            <p className="font-sans font-semibold">Sign In With Google</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
