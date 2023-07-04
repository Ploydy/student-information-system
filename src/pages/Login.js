import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onsubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}></form>

      <div className="row g-3">
        <div className="col-6">
          <input
            className="form-control"
            placeholder="Email address"
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>

        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required.",
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
      </div>
    </div>
  );
}
