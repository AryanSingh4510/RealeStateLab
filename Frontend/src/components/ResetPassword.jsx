import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { id, token } = useParams();
  const history = useNavigate();

  const [data2, setData] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/api/v1/auth/reset-password/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status !== 201) {
      history.replace("/");
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      toast.error("Password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters!", {
        position: "top-center",
      });
    } else {
      const res = await fetch(`/api/v1/auth/reset-password/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setPassword("");
        setMessage(true);
      } else {
        toast.error("Token expired. Generate a new link.", {
          position: "top-center",
        });
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <>
      {data2 ? (
        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1>Enter Your NEW Password</h1>
            </div>
            <form>
              {message && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Password Successfully Updated
                </p>
              )}
              <div className="form_input">
                <label htmlFor="password">New password</label>
                <input
                  type="password"
                  value={password}
                  onChange={setval}
                  name="password"
                  id="password"
                  placeholder="Enter Your new password"
                />
              </div>
              <button className="btn" onClick={sendpassword}>
                Send
              </button>
            </form>
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
          </div>
        </section>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      )}
    </>
  );
};

export default ResetPassword;
