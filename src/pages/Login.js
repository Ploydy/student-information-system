import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
/* import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/counterSlice"; */
/* import axios from "axios"; */

export default function Login() {
  /* const count = useSelector((state) => state.counter.value);
  const count2 = useSelector((state) => state.counter.value2);
  const dispatch = useDispatch(); */

  /* const [user, setUser] = useState(); */

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* const handleLogin = values => {
    const userData = values
    axios.post("http://localhost:3001/user", {email , password})
    .then(res => {
      if(res.data.validation){
        alert('You are successfully logged in')
        setUser(res);
      }
      else {
        alert('Your password or email is not correct. Please try again')
      }
    })
   }; */

  /* const getUser = () => {
    fetch("http://localhost:3001/user").then(res => res.json()).then(data => console.log(data))
  }
   getUser() */

  /* const handleLogin = async (data) => {
    const userData = await fetch("http://localhost:3001/user")
    if (userData) {
      if (
        userData.email === data.email &&
        userData.password === data.password
      ) {
        setUser(localStorage.setItem("loggedInUser", userData.email));
        navigate("/home");
        console.log(userData.firstname + " You Are Successfully Logged In");
      } else {
        alert("Email or Password is not matching with our recordd");
      }
    } else {
      alert("Email or Password is not matching with our record");
    }
  }; */

  const handleLogin = (data) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      if (
        userData.email === data.email &&
        userData.password === data.password
      ) {
        localStorage.setItem("loggedInUser", userData.email);
        navigate("/home");
        console.log(userData.firstname + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  /* const sampleFetch = async () => {
    // sample get
    // const result = await fetch("http://localhost:3001/courses");
    // const res = result.json();
    // console.log(res);
    // sample post
    const result = await fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "BS Architecture" }),
    });
    console.log(result);
  }; */

  return (
    <section>
      <div className="login-form">
        <div className="login-container card">
          <form className="form" onSubmit={handleSubmit(handleLogin)}>
            <input
              className="form-control"
              placeholder="Email address"
              type="email"
              name="email"
              {...register("email", {
                required: "Email is not matching in our data.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

            <div className="">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                {...register("password", {
                  required: "Password is not matching in our data.",
                  minLength: {
                    value: 8,
                    message: "Password should be at-least 8 characters.",
                  },
                  validate: (value) => {
                    return (
                      [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                        pattern.test(value)
                      ) ||
                      "must include lower, upper, number, and dont use special characters"
                    );
                  },
                })}
              />
              {errors.password ? (
                <div className="errorMsg">{errors.password.message}</div>
              ) : null}
            </div>

            <div className="login-button">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <div className="dont-have-an-account">
            <h6> dont have an account? </h6>

            <div className="row">
              <Link to="/register" className="col-4">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* to delete, sample redux actions */}
      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </section>
  );
}
