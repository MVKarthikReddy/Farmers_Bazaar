import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postAPI } from "../../utils/api/postRequest";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loading/Loader";
import { useDispatch } from "react-redux";
import { addSellerData, addUserData } from "../../redux/actions";
import { notify } from "../../utils/helper/notification";

function LoginAndSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { type } = useParams();
  const [signIn, setSignIn] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [brandName, setBrandName] = useState("");
  const [otp, setOTP] = useState("");

  const [showOTPSection, setShowOTPSection] = useState(false);

  const handleFormSubmit = async () => {
    setIsLoading(true);
    if (type === "user") {
      if (signIn === true) {
        let userData = await postAPI("/api/users/login", { email, password });
        console.log(userData);
        if (userData.isLoggedIn) {
          dispatch(addUserData(userData.userData));
          navigate('/');
        }
      } else {
        
        await postAPI(`/api/users/register`, {
          name,
          email,
          password,
          phoneNo,
        });
      }
    } else if (type === "seller") {
      if (signIn === true) {
        let sellerData = await postAPI("/api/sellers/login", { email, password });
        if (sellerData.isLoggedIn) {
          dispatch(addSellerData(sellerData.sellerData));
          navigate('/sellerdashboard');
        }
      } else {
       
        console.log('seller data')

        await postAPI(`/api/sellers/register`, {
          name,
          email,
          password,
          phoneNo,
          brandName,
        });
      }
    }

    setName("");
    setEmail("");
    setPassword("");
    setPhoneNo("");
    setBrandName("");
    setOTP("");
    setIsLoading(false);
    setShowOTPSection(false);
  };

  const sendOTPMail = async () => {
    setIsLoading(true);
    await postAPI(`otp/generate/?email=${email}&name=${name}`);
    setShowOTPSection(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen p-1 flex flex-row justify-center">
        <section className="my-3 border border-black-700 rounded-xl p-5 w-4/5 h-5/5 flex flex-row">
          <div
            className={`w-full md:w-1/2 overflow-y-auto duration-300 ease-linear transition ${
              signIn ? "" : "md:translate-x-full"
            }`}
          >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="mx-auto border-1 rounded-2-md">
                <button
                  className={`rounded-l-md  ${
                    signIn
                      ? type === "seller"
                        ? "bg-green-600 hover:bg-green-500 text-white"
                        : "bg-blue-600 hover:bg-blue-500 text-white"
                      : "text-black hover:bg-gray-100"
                  }  px-6 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  onClick={() => {
                    setSignIn(true);
                    setShowOTPSection(false);
                  }}
                >
                  SignIn
                </button>
                <button
                  className={`rounded-r-md  ${
                    signIn
                      ? "text-black hover:bg-gray-100"
                      : type === "seller"
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }  px-6 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  onClick={() => setSignIn(false)}
                >
                  SignUp
                </button>
              </div>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  {signIn ? "Sign In" : "Sign Up"} to{" "}
                  <span
                    className={`${
                      type === "seller" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {type === "user" ? "User" : "Seller"}
                  </span>{" "}
                  account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {!showOTPSection && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!isLoading) {
                        
                        handleFormSubmit();
                      }
                    }}
                  >
                    <div className={`${signIn ? "hidden" : "block"}`}>
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          value={name}
                          {...(!signIn ? { required: true } : {})}
                          onChange={(e) => setName(e.target.value)}
                          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                            type === "seller"
                              ? "focus:ring-green-600"
                              : "focus:ring-blue-600"
                          } sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>

                    {type === "seller" && (
                      <div className={`${signIn ? "hidden" : "block"}`}>
                        <label
                          htmlFor="text"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Brand Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...(!signIn ? { required: true } : {})}
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                            className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6`}
                          />
                        </div>
                      </div>
                    )}
                    <div className={`${signIn ? "hidden" : "block"}`}>
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          value={phoneNo}
                          pattern="^\d{10}$"
                          onChange={(e) => setPhoneNo(e.target.value)}
                          {...(!signIn ? { required: true } : {})}
                          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                            type === "seller"
                              ? "focus:ring-green-600"
                              : "focus:ring-blue-600"
                          } sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                            type === "seller"
                              ? "focus:ring-green-600"
                              : "focus:ring-blue-600"
                          } sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900 rounded-xl"
                        >
                          Password
                        </label>
                        {/* <div className={`text-sm ${signIn ? "block" : "hidden"}`}>
                          <a
                            href="#"
                            className={`font-semibold ${
                              type === "user"
                                ? "text-green-600 hover:text-green-500"
                                : " text-blue-600 hover:text-blue-500"
                            }`}
                          >
                            Forgot password?
                          </a>
                        </div> */}
                      </div>
                      <div className="mt-2">
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                            type === "seller"
                              ? "focus:ring-green-600"
                              : "focus:ring-blue-600"
                          } sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md ${
                          type === "seller"
                            ? `bg-green-600 hover:bg-green-500 focus-visible:outline-green-600`
                            : `bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600`
                        }  px-3 py-1.5 text-sm 
                      font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 items-center`}
                      >
                      
                        {isLoading ? (
                          <Loader color={"#ffffff"} size={10} />
                        ) : signIn ? (
                          "Sign In"
                        ) : (
                          "Sign Up" 
                          // "Send OTP"
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {showOTPSection && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!isLoading) {
                        handleFormSubmit();
                      }
                    }}
                  >
                    <div className={`${signIn ? "hidden" : "block"}`}>
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        OTP
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          value={otp}
                          onChange={(e) => setOTP(e.target.value)}
                          {...(!signIn ? { required: true } : {})}
                          className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                            type === "seller"
                              ? "focus:ring-green-600"
                              : "focus:ring-blue-600"
                          } sm:text-sm sm:leading-6`}
                        />
                        
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md ${
                          type === "seller"
                            ? `bg-green-600 hover:bg-green-500 focus-visible:outline-green-600`
                            : `bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600`
                        }  px-3 py-1.5 text-sm 
                      font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 items-center`}
                      >
                        {isLoading ? (
                          <Loader color={"#ffffff"} size={10} />
                        ) : signIn ? (
                          "Sign In"
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div
            className={`md:w-1/2 relative duration-900 ease-linear rounded-x transition  ${
              signIn ? "" : "-translate-x-full"
            }`}
          >
            
            
            <img
              className="mx-auto w-full h-full"
              src="https://api.unsplash.com/random/?farmers"
              alt="Your Company"
            />
            <div className="absolute top-0 left-0 z-40 bottom-0 right-0 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/25"></div>
            
          </div>
        </section>
    </div>
  );
}

export default LoginAndSignup;
