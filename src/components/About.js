import { useContext } from "react";
import userContext from "../utils/LoginContext";
import aboutCover from "../img/abtImg.jpg";
import restru from "../img/firstRestru.jpg";
import linked from "../img/lin.png";
import gitImg from "../img/git.png";
import tweet from "../img/tweet.png";
import profile from "../img/profile.jpg";

const About = () => {
  const { login } = useContext(userContext);

  return (
    <>
      <div className="">
        <div className="bg-center bg-contain bg-no-repeat relative">
          <div className="absolute z-10 bottom-11 w-full">
            <h1 className=" text-white text-3xl md:text-5xl text-center font-fsans font-bold drop-shadow-2xl shadow-yellow-300">
              Better food for more people
            </h1>
            <p className="text-white text-center animate-bounce">
              scroll for more
            </p>
          </div>
          <img
            className="object-cover lg:object-fill  object-center relative h-[90vh] w-full"
            src={aboutCover}
            alt="about-cover"
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center mx-1 sm:mx-10 mt-5 sm:mt-12 px-2 py-8 shadow-slate-400 shadow-xl rounded-lg">
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 ">
            <h1 className="text-2xl md:text-4xl">who are we ?</h1>
            <div className="my-2 w-16 h-1 bg-red-600"></div>
            <h2 className="mt-6 text-sm md:text-base font-light text-slate-600">
              Our technology platform connects customers, restaurant partners
              and delivery partners, serving their multiple needs. Customers use
              our platform to search and discover restaurants, read and write
              customer generated reviews and view and upload photos, order food
              delivery, book a table and make payments while dining-out at
              restaurants. On the other hand, we provide restaurant partners
              with industry-specific marketing tools which enable them to engage
              and acquire customers to grow their business while also providing
              a reliable and efficient last mile delivery service. We also
              operate a one-stop procurement solution, Hyperpure, which supplies
              high quality ingredients and kitchen products to restaurant
              partners. We also provide our delivery partners with transparent
              and flexible earning opportunities.
            </h2>
          </div>

          <img
            className="w-[400px] lg:w-[500px] lg:h-[350px] rounded-md"
            src={restru}
            alt="fisrt-Resturant"
          />
        </div>

        <div className="relative">
          <div className="flex flex-col-reverse sm:flex-row justify-around items-center mx-1 sm:mx-10 mt-5 sm:mt-12 px-2 py-8 my-12 rounded-lg border-1 border-gray-400 shadow-slate-400 shadow-xl">
            <div className="w-full sm:w-1/2 mt-4 lg:mt-0 ">
              <h1 className="text-3xl font-fsans mb-2 text-red-700">
                Md. Zahid Hussain
              </h1>
              <p className=" ml-2 mt-4 text-sm md:text-base text-slate-600">
                I’m a frontend developer who has turned years of freelancing
                into a full-time career. Being a frontend developer allows me to
                not only develop client-facing apps and websites but also
                develop optimized and cutting-edge UI.
              </p>
              <div className="flex ml-2 mt-4">
                <a
                  className="w-10 mx-1"
                  href="https://www.linkedin.com/in/md-zahid-hussain-3811031b6/"
                  target="_blank"
                >
                  <img src={linked} alt="founder linkedln profile" />
                </a>
                <a
                  className="w-10 mx-1"
                  href="https://github.com/ZahidMdHussain"
                  target="_blank"
                >
                  <img src={gitImg} alt="founder GitHub Id" />
                </a>
                <a
                  className="w-10 mx-1"
                  href="https://twitter.com/zahidalhassn"
                  target="_blank"
                >
                  <img src={tweet} alt="founder tweeter handle" />
                </a>
              </div>
            </div>

            <div className="w-52">
              <img
                className="rounded-full bg-no-repeat shadow-lg shadow-slate-500"
                src={profile}
                alt=""
              />
            </div>
          </div>
          <div className="left-2 top-2 sm:left-12 w-fit bg-red-600 text-center text-white font-bold text-sm absolute px-2">
            Founder
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
