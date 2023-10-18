import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
// import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/"
          className={({ isActive }) =>
            isActive ? " bg-[#FF4D30] text-white py-2 px-3 rounded-md" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/events"
          className={({ isActive }) =>
            isActive ? " bg-[#FF4D30] text-white py-2 px-3 rounded-md" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to={`/Toyota`}
          className={({ isActive }) =>
            isActive ? " bg-[#FF4D30] text-white py-2 px-3 rounded-md" : ""
          }
        >
          BrandShow
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setHidden(!hidden)}
          to="/price"
          className={({ isActive }) =>
            isActive ? " bg-[#FF4D30] text-white py-2 px-3 rounded-md" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  //   const { user, signOutMethod } = useAuth();
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(user);

  const handleSignOut = () => {
    signOutMethod()
      .then(() => {
        console.log("Signed Out");
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className=" drop-shadow-[0_0px_5px_rgba(0,0,0,0.12)] bg-gradient-to-r from-white to-[#FFEDEA] w-full">
      <div
        className={`z-[12] text-black  navbar w-[95%] mx-auto max-w-[1440px] flex justify-between items-center  pt-4`}
      >
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setHidden(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content  mt-3 p-2 shadow rounded-box w-52 z-[10] bg-black text-white hove:bg-none ${
                hidden ? "hidden" : "block"
              } z-10`}
            >
              <li className="mb-4 flex items-start flex-row ">
                <div className="md:hidden h-[60px] w-[60px] rounded-full border border-black">
                  <img
                    // src={user?.photoURL}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="flex  items-center w-[50%] h-full flex-row">
                  <p className="md:hidden mt-3">Towfiq</p>
                </div>
              </li>
              {navLinks}
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-lg md:text-2xl text-black">
            GatherJoy
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between gap-4 px-1">{navLinks}</ul>
        </div>

        <div className="flex justify-end gap-4 items-center">
          <p className="hidden md:block ">Towfiq</p>
          <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black">
            <img
              src=""
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <Button
            // onClick={handleSignOut}
            className="text-sm md:text-base py-[7px] px-3 bg-[#FF4D30] text-white rounded-md"
          >
            Sign Out
          </Button>
        </div>

        {/* <div className="navbar-end">
          <Button
            // onClick={() => navigate("/login")}
            className="text-sm md:text-base py-[5px] px-3 bg-orange-500 text-white rounded-lg"
          >
            Login
          </Button>{" "}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
