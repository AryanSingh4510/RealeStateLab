import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setErrorMessage(""); // Clear any previous error messages
        navigate("/success-page");
      } else {
        toast.error(res.data.message);
        setSuccessMessage(""); // Clear any previous success messages
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <div className="bg-green min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
          <div className="mb-5">
            <form className="card-body" method="dialog" onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg text-green">Forgot Password</h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green">
                    Enter your email, and we'll send you instructions on how to
                    reset your password.
                  </span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="input input-bordered file-input-bordered"
                />
              </div>

              {/* show success or error messages */}
              {successMessage && (
                <div className="text-green my-2">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-red-500 my-2">{errorMessage}</div>
              )}

              {/* submit btn */}
              <div className="form-control mt-4">
                <input
                  type="submit"
                  className="btn bg-green text-white"
                  value="Submit"
                />
              </div>

              {/* close btn */}
              <Link to="/">
                <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
