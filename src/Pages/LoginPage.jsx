import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@mui/material";
import LoginCard from "../Cards/LoginCard";

const LoginPage = () => {
  return (


    <div className="flex items-center justify-center  w-full h-fit min-h-screen bg-white  border-red-200">
      <div className="flex  items-center justify-center w-full  lg:w-[90vw] xl:w-[90vw] 2xl:w-[60vw]   bg-slate-100 shadow-md rounded h-[90%] p-1 md:p-3 lg:p-5 ">


        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full bg-white  rounded h-full ">
          <div
            className="flex relative items-center justify-center w-full h-80 md:h-120  xl:h-full rounded sm:p-2 md:p-4 lg:p-8"
            style={{
              background: "linear-gradient(to bottom, #ff8066, #833126)",
            }}
          >
            <div
              className="flex flex-col items-center justify-end lg:justify-between w-full h-full shadow-md rounded p-1 md:p-4 lg:p-8 relative"
              style={{
                backgroundColor: "rgba(245,245,245,0.125)",
                backdropFilter: "blur(20px) saturate(100%)",
                WebkitBackdropFilter: "blur(20px) saturate(100%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h1 className="text-gray-200 font-semibold text-md md:text-xl max-md:absolute top-2 lg:text-xl text-center w-full">
                Empowering people through seamless <br /> HR management
              </h1>

              <div className="flex items-center w-full mt-4">
                <img
                  src="/team Image.png"
                  alt="team image"
                  className="w-full h-auto object-cover object-center rounded"
                />
              </div>

              <p className="text-sm w-full text-center text-gray-200 font-semibold mt-4 hidden lg:block">
                Efficiently manage your workforce, streamline operations
                effortlessly
              </p>
            </div>
          </div>
          
       

          <LoginCard/>



        </div>
      </div>
    </div>
  );
};

export default LoginPage;
