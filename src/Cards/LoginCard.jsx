import React from 'react'
import MailIcon from "@mui/icons-material/Mail";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@mui/material";

const LoginCard = () => {
  return (
    
    <div className=" flex flex-col relative items-center justify-center gap-0 w-full h-full  rounded p-2 lg:p-8  ">
    <h1 className=" font-bold  text-lg mt-5">
      JEET KI EK RANANITI
    </h1>
    <div className=" flex flex-col items-start justify-start gap-5   w-full lg:w-[90%] p-5 h-fit ">
      <div className=" flex flex-col w-full items-center justify-center   ">
        <h1 className=" text-slate-500 font-semibold  text-lg">
          Sign In
        </h1>

      </div>

      <form className="w-full">
        <div className=" flex flex-col w-full h-fit gap-3">
          <div className=" flex flex-col gap-2">
            <label
              htmlFor="emailAddress"
              className=" text-slate-500 font-semibold  text-sm"
            >
              Email Address
            </label>
            <div className=" flex w-full h-fit rounded border border-gray-300 ">
              <input
                type="email"
                name="email"
                id="emailAddress"
                className=" border-0 rounded w-full h-8  focus:outline-0 px-2"
              />
              <div className=" felx w-10 h-8 ">
                <MailIcon
                  sx={{ fontSize: "16px", color: "rgb(64,64,64)" }}
                />{" "}
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label
              htmlFor="password"
              className=" text-slate-500 font-semibold  text-sm"
            >
              {" "}
              Password
            </label>
            <div className=" flex w-full h-fit rounded border border-gray-300 ">
              <input
                type="password"
                id="password"
                className=" border-0 rounded w-full h-8  focus:outline-0 px-2"
                name="password"
              />
              <div className=" felx w-10 h-8 cursor-pointer ">
                {" "}
                <VisibilityOffIcon
                  sx={{ fontSize: "16px", color: "rgb(64,64,64)" }}
                />{" "}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between w-full text-sm font-semibold text-slate-500">
            <label htmlFor="consent">
              {" "}
              <input
                type="checkbox"
                id="consent"
                className="text-red-500 "
              />{" "}
              Remember Me{" "}
            </label>
            <p className='text-sm text-blue-500'  >Forget Password</p>
          </div>
          <div className="flex items-center justify-center w-full h-fit mt-2 ">
            <Button
              variant="contained"
              fullWidth
              sx={{
                background:
                  "linear-gradient(45deg, #ff8066 ,  #833126  )",
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </form>

      <div className=" flex flex-col w-full gap-2  items-center justify-between">
        <p className='text-sm text-slate-600  '  >
          Don't have an account?.{" "}
          <span className="text-blue-500 text-sm  ">
            {" "}
            Register Here{" "}
          </span>{" "}
        </p>
        <p className=' text-sm font-semibold text-slate-700'  >OR</p>
        <div className=" flex items-center justify-between w-full gap-3">
          <div className="flex items-center justify-center  h-10  w-1/3 rounded bg-blue-500 cursor-pointer  hover:shadow-md  ">
            <img
              src="/fbicon.png"
              alt="icon"
              className=" h-[80%] w-auto "
            />
          </div>
          <div className=" h-10  w-1/3 flex items-center justify-center rounded bg-white border cursor-pointer hover:shadow-md  border-gray-300 ">
            <img
              src="/goicon.png"
              alt="icon"
              className=" h-[80%] w-auto "
            />
          </div>
          <div className=" h-10  w-1/3 flex items-center justify-center rounded bg-black hover:shadow-md  cursor-pointer ">
            <img
              src="/appleicon.png"
              alt="icon"
              className=" h-[80%] w-auto "
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default LoginCard