import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../Shared/Button";
// import useAuth from "../../hooks/useAuth";
import { useContext, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AuthContext from "../../Context/AuthContext";
import useTheme from "../../Hooks/useTheme";

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
          to="/add-product"
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
          to="/cart"
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
  const { user, signOutMethod } = useAuth();

  const { isDark, handleSwitchTheme } = useTheme();

  // console.log(user);

  const handleSignOut = () => {
    signOutMethod()
      .then(() => {
        console.log("Signed Out");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav
      className={` drop-shadow-[0_0px_5px_rgba(0,0,0,0.12)]  w-full ${
        pathname === "/login" || pathname === "/signup"
          ? "bg-[#1B2028] text-white"
          : "bg-gradient-to-r from-white to-[#FFEDEA] text-black"
      }`}
    >
      <div
        className={`z-[12] navbar w-[95%] mx-auto max-w-[1440px] flex justify-between items-center  pt-4`}
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
              <li className="mb-4 flex  flex-row  items-center justify-center">
                <div className="md:hidden h-[60px] w-[60px] rounded-full border border-black">
                  <img
                    // src={user?.photoURL}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="flex w-[50%] items-center  h-full flex-row justify-between">
                  <p className="md:hidden  w-max">Towfiq</p>
                  <input
                    type="checkbox"
                    className="toggle toggle-error toggle-sm"
                    checked={isDark}
                    onChange={handleSwitchTheme}
                  />
                </div>
              </li>
              {navLinks}
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-lg md:text-2xl">
            GatherJoy
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between gap-4 px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="flex justify-end gap-4 items-center">
            <p className="hidden md:block ">{user?.displayName}</p>
            <div className="hidden md:block h-[30px] w-[30px] rounded-full border border-black">
              {user && (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>

            <Button
              onClick={handleSignOut}
              className="bg-[#FF4D30] text-white py-2 px-5 rounded-md"
            >
              Sign Out
            </Button>
            <input
              type="checkbox"
              className="toggle toggle-error checked:bg-black"
              checked={isDark}
              onChange={handleSwitchTheme}
            />
          </div>
        ) : (
          <div className="">
            <Button
              onClick={() => navigate("/login")}
              className="bg-[#FF4D30] text-white py-2 px-5 rounded-md"
            >
              Login
            </Button>
            <input
              type="checkbox"
              className="toggle toggle-error"
              checked={isDark}
              onChange={handleSwitchTheme}
            />
          </div>
        )}

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
