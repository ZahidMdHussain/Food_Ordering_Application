import { useContext } from "react";
import userContext from "../utils/LoginContext";
import { Link } from "react-router-dom";
import login_img from "../img/login.jpg";

const Login = () => {
  const { login, setlogin } = useContext(userContext);

  return (
    <>
      <div className="min-h-[59vh] flex justify-center items-center bg-gradient-to-r from-[#0BAB64] to-[#3BB78F]">
        <div className="bg-[#f4f9fd] mx-4 w-full sm:max-w-[60vw] 2xl:max-w-[800px]  grid grid-flow-col grid-cols-12">
          <div className="col-span-12 md:col-span-7 p-4 flex flex-col justify-center items-center font-fsans">
            <h2 className="text-2xl font-bold my-4 text-[#3BB78F]">Log In</h2>
            <form className=" py-5 w-full text-center">
              <div className="my-4">
                <input
                  className="px-4 py-2 text-sm md:text-base border w-full md:w-2/3 rounded-full focus:outline focus:outline-[#3BB78F]"
                  onChange={(e) => {
                    setlogin({
                      username: e.target.value,
                    });
                  }}
                  type="text"
                  name="name"
                  placeholder="Firstname"
                />
              </div>
              <div className="my-4">
                <input
                  className="px-4 py-2 text-sm md:text-base border w-full md:w-2/3 rounded-full focus:outline focus:outline-[#3BB78F]"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div
                className="outline-none border-transparent focus:border-transparent focus:ring-0"
                type="submit"
              >
                <Link
                  className="border-transparent focus:border-transparent focus:ring-0"
                  to="/"
                >
                  <button
                    className="px-4 py-2 text-lg border-0 w-full md:w-2/3 rounded-full bg-[#3BB78F] text-white outline-0 focus:outline border-transparent focus:border-transparent focus:ring-0 hover:bg-[#0BAB64]"
                    type="submit"
                  >
                    LogIn
                  </button>
                </Link>
              </div>
              <p className="mt-7 text-xs font-thin text-slate-400">
                Don't have an account?{" "}
                <span className="text-[#0BAB64]">Register</span>
              </p>
            </form>
          </div>
          <div className="bg-[#ffffff] md:col-span-5 md:items-center hidden md:flex">
            <img src={login_img} alt="login_banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
