import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const SignUp = () => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(false);

  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState(" ");
  const [emailError, setEmailError] = useState("");
  const [photoError, setPhotoError] = useState("");

 

  const { createUser, setUser, updateUser, googleSignIn } = useAuth();

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userProfile = {
          email: user.email,
          name: user.displayName,
          bids: [],
        };

        // save user info in DB
        fetch("https://task-tempo.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

       
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleFocus(e) {
    if (e.target.value.length > 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  function handleRegister(e) {
    e.preventDefault();

    const terms = e.target.terms.checked;

    const charLengthCheck = /^.{6,}$/;
    const uppercaseCheck = /[A-Z]/;
    const lowercaseCheck = /[a-z]/;

    setError("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setPhotoError("");

    if (!userName) {
      setNameError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          Required!
        </span>
      );
      return;
    }
    if (!email) {
      setEmailError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          Please provide your email!
        </span>
      );
      return;
    } else if (!password) {
      setPasswordError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          Please provide your password!
        </span>
      );
      return;
    } else if (!charLengthCheck.test(password)) {
      setPasswordError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          Password must be at least 6 character
        </span>
      );
      return;
    } else if (!uppercaseCheck.test(password)) {
      setPasswordError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          At least one upperCase letter required!
        </span>
      );
      return;
    } else if (!lowercaseCheck.test(password)) {
      setPasswordError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          At least one lowercase letter required!
        </span>
      );
      return;
    } else if (!photoUrl) {
      setPhotoError(
        <span className="flex items-center gap-1 text-red-500">
          <MdOutlineErrorOutline className="mt-0.5" />
          Please provide photo url
        </span>
      );
      return;
    } else if (!terms) {
      setError("please accept terms and conditions.");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: userName, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: userName, photoURL: photoUrl });
          })
          .catch((error) => {
            console.log(error);
            console.log("error profile update");
          });

        const userProfile = {
          email: user.email,
          name: userName,
          bids: [],
        };

        // save user info in DB
        fetch("https://task-tempo.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        // notify();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }

  return (
    <div
      className={`min-h-[calc(100vh-409px)] px-4 py-10 ${
        darkMode ? "bg-[#1d1818]" : "bg-gray-200"
      }`}
    >
      <div className="max-w-md mx-auto">
        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            darkMode ? "bg-[#2B2B2B] border border-[#423F3E]/30" : "bg-white"
          }`}
        >
      
          <div
            className={`px-6 py-6 ${darkMode ? "bg-[#362222]" : "bg-white"}`}
          >
            <h2
              className={`text-2xl md:text-3xl font-bold text-center ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Create Account
            </h2>
            <p
              className={`text-center text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join our community of freelancers and clients
            </p>
          </div>

    
          <form
            onSubmit={handleRegister}
            className="px-6 sm:px-8 py-8 space-y-5"
          >
        
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  e.target.value.length > 0 && setNameError("");
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-gray-200  focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
                placeholder="Enter your full name"
              />
              {nameError && (
                <p
                  className={`mt-1 text-xs ${
                    darkMode ? "text-red-400" : "text-red-500"
                  }`}
                >
                  {nameError}
                </p>
              )}
            </div>

       
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  e.target.value.length > 0 && setEmailError("");
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
                placeholder="Enter your email address"
              />
              {emailError && (
                <p
                  className={`mt-1 text-xs ${
                    darkMode ? "text-red-400" : "text-red-500"
                  }`}
                >
                  {emailError}
                </p>
              )}
            </div>
 
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleFocus(e);
                    setPasswordError("");
                  }}
                  type={showPass ? "text" : "password"}
                  id="password"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                      : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 pr-10`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((prev) => !prev)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } ${focused ? "block" : "hidden"}`}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {passwordError && (
                <p
                  className={`mt-1 text-xs ${
                    darkMode ? "text-red-400" : "text-red-500"
                  }`}
                >
                  {passwordError}
                </p>
              )}
            </div>

          
            <div>
              <label
                htmlFor="photo"
                className={`block text-sm font-medium mb-1.5 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Profile Photo URL
              </label>
              <input
                name="photo"
                type="text"
                id="photo"
                value={photoUrl}
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                  setPhotoError("");
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                    : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2`}
                placeholder="Enter URL to your profile photo"
              />
              {photoError && (
                <p
                  className={`mt-1 text-xs ${
                    darkMode ? "text-red-400" : "text-red-500"
                  }`}
                >
                  {photoError}
                </p>
              )}
            </div>

         
            <div
              className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <input
                name="terms"
                type="checkbox"
                id="terms"
                className={`mr-2 h-4 w-4 rounded ${
                  darkMode
                    ? "bg-[#171010] border-[#423F3E] text-[#423F3E]"
                    : "border-gray-300 text-blue-600"
                }`}
                onChange={(e) => {
                  e.target.checked && setError("");
                }}
              />
              <label htmlFor="terms" className="text-sm">
                I accept the{" "}
                <span
                  className={
                    darkMode
                      ? "text-gray-300 underline"
                      : "text-blue-600 underline"
                  }
                >
                  terms and conditions
                </span>
              </label>
            </div>

         
            {error && (
              <div
                className={`py-2 px-3 rounded-md ${
                  darkMode ? "bg-red-900/30" : "bg-red-100"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-red-300" : "text-red-600"
                  }`}
                >
                  {error}
                </p>
              </div>
            )}

          
            <button
              type="submit"
              className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                darkMode
                  ? "bg-[#423F3E] hover:bg-[#362222] text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Create Account
            </button>

        
            <div className="text-center">
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Already have an account?{" "}
                <Link
                  className={`font-medium ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            </div>

           
            <div className="relative flex items-center py-2">
              <div
                className={`flex-grow border-t ${
                  darkMode ? "border-gray-700" : "border-gray-300"
                }`}
              ></div>
              <span
                className={`px-3 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                or register with
              </span>
              <div
                className={`flex-grow border-t ${
                  darkMode ? "border-gray-700" : "border-gray-300"
                }`}
              ></div>
            </div>

       
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={`w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                darkMode
                  ? "bg-[#362222] hover:bg-[#423F3E] text-gray-200 border border-[#423F3E]"
                  : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300"
              }`}
            >
              <FcGoogle size={20} />
              <span>Sign up with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
