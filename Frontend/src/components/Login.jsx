import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const handleSignupButton = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data ? res.data.message : "Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-green min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="mb-5 relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </button>
          <form className="card-body" method="dialog" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg text-green">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email"
                className="input input-bordered file-input-bordered"
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
                className="input input-bordered file-input-bordered"
              />
              <label className="label">
                <button
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover mt-2 text-green"
                >
                  Forgot password?
                </button>
              </label>
            </div>

            {/* submit btn */}
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-green text-white"
                value="Login"
              />
            </div>

            <p className="text-center my-2 text-green">
              Don't have an account?
              <button
                onClick={handleSignupButton}
                className="underline text-green ml-1"
              >
                Signup Now
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
