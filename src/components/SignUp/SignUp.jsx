import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../context/AuthContext/AuthContext";

const SignUp = () => {
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

  // const notify = () =>
  //   toast.success(
  //     "Your registration is complete. Welcome to seamless bill payments!"
  //   );

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
        fetch("https://freelance-task-deploy-server.vercel.app/users", {
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
      .catch((error) => {
        console.log(error);
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
        fetch("https://freelance-task-deploy-server.vercel.app/users", {
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
    <div className="min-h-[calc(100vh-409px)] px-3">
      <div className="max-w-md mx-auto my-16 p-6  border border-gray-200 rounded-md shadow-md bg-gray-50">
        <h2 className="text-3xl mb-6 font-bold">Register Now</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
              placeholder="Your Name"
            />
            <p className="mt-0.5">{nameError}</p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Your Email"
            />
            <p className="mt-0.5">{emailError}</p>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className={`absolute right-1 top-9 text-2xl ${
                focused ? "flex" : "hidden"
              }`}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>

            <p className="mt-0.5">{passwordError}</p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photo URL
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              placeholder="Your Photo Url"
            />
            <p className="mt-0.5">{photoError}</p>
          </div>
          <div className="flex items-center mb-4">
            <input
              name="terms"
              type="checkbox"
              id="terms"
              className="mr-2 leading-tight"
              onChange={(e) => {
                e.target.checked && setError("");
              }}
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Accept terms and conditions
            </label>
          </div>
          <p className="text-red-500 font-semibold mb-2">{error}</p>

          <div
            className="flex flex-col gap-3
        "
          >
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>

            <button>
              <span>Already Have an Account? </span>
              <Link
                className="text-blue-600 font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="bg-white hover:bg-gray-200 text-slate-600 border border-gray-300 font-bold py-2 px-4 rounded  flex items-center gap-2 w-fit mx-auto mt-7"
        >
          <FcGoogle size={24} /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
