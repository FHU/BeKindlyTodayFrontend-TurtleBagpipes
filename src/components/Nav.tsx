import { Link } from "react-router-dom";
import { BsCalendar4, BsPersonCircle } from "react-icons/bs";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbar = () => {
  const inDev = import.meta.env.VITE_ENVIRONMENT === "dev";

  const { login, register, isAuthenticated } = useKindeAuth();

  return (
    <nav className="grid grid-cols-3 w-full text-2xl px-2 md:px-5 bg-kindly-blue text-kindly-offWhite">
      <Link
        to="/home"
        className="flex items-center hover:bg-transparent p-2 rounded-lg w-20 h-20"
      >
        <div>
          <img
            className="border-none hover:opacity-75"
            src={"assets/bekindlyblue.svg"}
            alt="logo"
          />
        </div>
      </Link>
      <h1 className="text-3xl md:text-5xl my-auto justify-self-center">
        BeKindly
      </h1>
      <div className="flex items-start justify-end">
        {inDev || isAuthenticated ? (
          <div>
            <Link to="/calendar" data-testid="calendar-link">
              <div className="btn md:px-4 px-2 text-3xl md:text-5xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsCalendar4 />
              </div>
            </Link>
            <Link to="/profile" data-testid="profile-link">
              <div className="btn md:px-4 px-2 text-3xl md:text-5xl text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75">
                <BsPersonCircle />
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex divide-x-2 text-right my-4">
            <div>
              <button
                onClick={() => login()}
                type="button"
                className="btn px-2 text-xs text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
              >
                Sign In
              </button>
            </div>
            <div>
              <button
                onClick={() => register()}
                type="button"
                className="btn px-2 text-xs text-white bg-transparent border-hidden hover:bg-transparent hover:opacity-75"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
