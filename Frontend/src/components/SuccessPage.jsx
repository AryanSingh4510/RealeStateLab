import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" method="dialog">
          <h3 className="font-bold text-lg text-green">Message</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green">
                Check your email inbox and click on reset your password link.
              </span>
            </label>
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
  );
};

export default SuccessPage;
