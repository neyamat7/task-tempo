import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";
import { useTheme } from "../../context/ThemeProvider/ThemProvider";

const Login = () => {
  const { darkMode } = useTheme();

  const { signInUser, googleSignIn, setLoading } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const [focused, setFocused] = useState(false);

  const notify = () =>
    toast.success("Your have successfully logged into your account!");
  const notifyError = (errMsg) => toast.error(errMsg);

  function handleFocus(e) {
    if (e.target.value.length > 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  function handleSignInWithPassword(e) {
    e.preventDefault();

    signInUser(email, password)
      .then((res) => {
        notify();
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
        setError(err?.message);
        notifyError(err?.message);
      });
  }

  function handleGoogleSignIn() {
    googleSignIn()
      .then((result) => {
        notify();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error?.message);
        notifyError(error?.message);
      });
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-409px)] ${
        darkMode ? "bg-dark-clr" : "bg-gray-200"
      }`}
    >
      <div className={`my-10 md:my-20 w-full max-w-md px-4 sm:px-0`}>
        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            darkMode ? "bg-card-clr border border-[#423F3E]/30" : "bg-white"
          }`}
        >
          <div
            className={`px-6 py-6 ${darkMode ? "bg-hover-clr" : "bg-white"}`}
          >
            <h1
              className={`text-2xl md:text-3xl font-bold text-center ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Welcome Back
            </h1>
            <p
              className={`text-center text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sign in to your account to continue
            </p>
          </div>

          <form className="px-6 sm:px-8 py-8">
            <div className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-1.5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    darkMode
                      ? "bg-dark-clr border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
                      : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2`}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    className={`block text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    to="/forget-password"
                    className={`text-xs font-medium ${
                      darkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleFocus(e);
                    }}
                    name="password"
                    id="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      darkMode
                        ? "bg-dark-clr border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
                        : "bg-white border-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 pr-10`}
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
                onClick={handleSignInWithPassword}
                type="submit"
                className={`cursor-pointer w-full py-2.5 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                  darkMode
                    ? "bg-gray-600 hover:bg-dark-clr text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Sign In
              </button>

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
                  or continue with
                </span>
                <div
                  className={`flex-grow border-t ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                ></div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                type="button"
                className={`cursor-pointer w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                  darkMode
                    ? "bg-gray-700 hover:bg-dark-clr text-gray-200 border border-[#423F3E]"
                    : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300"
                }`}
              >
                <FcGoogle size={20} />
                <span>Sign in with Google</span>
              </button>
            </div>
          </form>

          <div
            className={`px-6 sm:px-8 py-4 text-center border-t ${
              darkMode
                ? "border-gray-700 bg-hover-clr"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                className={`font-medium ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
