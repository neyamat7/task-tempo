import { useState } from "react"; 
import { MdOutlineErrorOutline } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../context/AuthContext/AuthContext";

const ForgetPassword = () => {
  const [error, setError] = useState("");

  const { resetPassword } = useAuth();

  function handleResetPassword(e) {
    e.preventDefault();

    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast(
          "A password reset email has been sent! please check your email.",
          {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-[calc(100vh-300px)]">
      <div className="rounded px-4 pt-6 pb-8 mb-4 max-w-md w-full">
        <div className="bg-amber-50 p-5 py-8 rounded-md">
          <h1 className="text-center text-2xl font-bold mb-6">
            Forgot Password?
          </h1>
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            {error && (
              <p className="text-center mb-2 text-red-500 font-semibold flex items-center justify-center gap-1">
                <MdOutlineErrorOutline /> {error}!
              </p>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
