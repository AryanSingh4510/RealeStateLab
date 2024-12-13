import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://realestatelab.onrender.com/api/v1/auth/contactus", {
        name,
        email,
        message,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        // Handle success, e.g., show a success message to the user
      } else {
        toast.error(res.data.message);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
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
          <form className="card-body" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg text-green">Contact Us</h3>

            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Your Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input input-bordered file-input-bordered"
                required
              />
            </div>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Your Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="input input-bordered file-input-bordered"
                required
              />
            </div>

            {/* message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green">Your Message</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="textarea textarea-bordered file-input-bordered"
                required
              ></textarea>
            </div>

            {/* submit btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-green text-white"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
