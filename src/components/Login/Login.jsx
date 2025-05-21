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
      });
  }

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-409px)] ${
        darkMode ? "bg-[#241d1d]" : "bg-gray-200"
      }`}
    >
      <div className={`my-10 md:my-20 w-full max-w-md px-4 sm:px-0`}>
        <div
          className={`rounded-xl shadow-lg overflow-hidden ${
            darkMode ? "bg-[#2B2B2B] border border-[#423F3E]/30" : "bg-white"
          }`}
        >
          <div
            className={`px-6 py-6 ${darkMode ? "bg-[#362222]" : "bg-white"}`}
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
                      ? "bg-[#171010] border-[#423F3E] text-gray-200 focus:ring-[#423F3E] focus:border-[#423F3E]"
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
                        ? "bg-[#171010] border-[#423F3E] text-gray-200 placeholder-gray-500 focus:ring-[#423F3E] focus:border-[#423F3E]"
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
                className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.01] ${
                  darkMode
                    ? "bg-[#423F3E] hover:bg-[#362222] text-white"
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
                className={`w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                  darkMode
                    ? "bg-[#362222] hover:bg-[#423F3E] text-gray-200 border border-[#423F3E]"
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
                ? "border-gray-700 bg-[#171010]"
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

{
  /* <div className="flex flex-col items-center justify-center bg-gray-100 min-h-[calc(100vh-409px)]">
      <div className="bg-white shadow-md my-20 py-6 rounded-md">
        <form className="px-6 sm:px-8 pb-8 mb-4 w-[280px] min-[390px]:w-[350px] sm:w-[400px]">
          <h1 className="text-3xl text-center font-bold mb-10">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleFocus(e);
                }}
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShowPass((prev) => !prev)}
                className={`absolute right-1 top-2 text-2xl ${
                  focused ? "flex" : "hidden"
                }`}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex items-center justify-end">
              <Link
                to="/forget-password"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <p className="text-red-500 font-semibold mb-2">{error}</p>
          <button
            onClick={handleSignInWithPassword}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <p className="mt-3">
            Don't Have an Account?
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>

        <div>
          <button
            onClick={handleGoogleSignIn}
            className="bg-white hover:bg-gray-200 text-slate-600 border border-gray-300 font-bold py-2 px-4 rounded  flex items-center gap-2 w-fit mx-auto mt-0"
          >
            <FcGoogle size={24} /> Sign in with Google
          </button>
        </div>
      </div>
    </div> */
}
