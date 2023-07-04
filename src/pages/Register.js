import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

export default function Register() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  /* const [error, setError] = useState(null); */

  return (
    <div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/*  ------------------------------------------------------------------REGISTRATION FORM-------------------------------------------------------------------------------- */}
        <section className="section-bg">
          <div className="section-title">
            <div className="text-center">
              <h3>Registration form</h3>
            </div>
          </div>

          <section>
            <div className="row g-3">
              <div className="col-7">
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
                {errors.email && (
                  <p className="errorMsg">{errors.email.message}</p>
                )}
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

              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Confirm password"
                  type="password"
                  name="confirm_password"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "Your password do not match";
                      }
                    },
                  })}
                />
                {errors.confirm_password && (
                  <p className="errorMsg">{errors.confirm_password.message}</p>
                )}
              </div>
            </div>

            {/* -----------------------------------------------------------------------PERSONAL INFO-------------------------------------------------------------------------------- */}

            <div className="title">
              <div className="text-center">
                <label>
                  <h4>Personal info</h4>
                </label>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="validationTextarea">Firstname:</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  {...register("firstname", {
                    required: "Firstname is required.",
                    maxLength: {
                      value: 30,
                      message: "Maximum characters has been reached.",
                    },
                  })}
                />
                {errors.firstname && (
                  <p className="errorMsg">{errors.firstname.message}</p>
                )}
                <div className="invalide-feedback"></div>
              </div>

              <div className="col-md-6">
                <label>Middlename:</label>
                <input
                  className="form-control"
                  type="text"
                  name="middlename"
                  {...register("middlename", {
                    required: "Put N/A if not available.",
                    maxLength: {
                      value: 30,
                      message: "Maximum characters has been reached.",
                    },
                  })}
                />
                {errors.middlename && (
                  <p className="errorMsg">{errors.middlename.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label>Lastname:</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  {...register("lastname", {
                    required: "Lastname is required.",
                    maxLength: {
                      value: 30,
                      message: "Maximum characters has been reached.",
                    },
                  })}
                />
                {errors.lastname && (
                  <p className="errorMsg">{errors.lastname.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label>Date of Birth:</label>
                <input
                  className="form-control"
                  type="date"
                  name="birthday"
                  {...register("birthday", {
                    required: "Indicate your birthday here.",
                    valueAsDate: true,
                  })}
                />
                {errors.birthday && (
                  <p className="errorMsg">{errors.birthday.message}</p>
                )}
              </div>

              <Form.Group className="col-md-6" controlId="gender">
                <label>Select Gender:</label>
                <Form.Check
                  type="radio"
                  label="Male"
                  value="male"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  value="female"
                  {...register("gender")}
                />
                <Form.Check
                  type="radio"
                  label="Prefer not to say"
                  value="prefernottosay"
                  {...register("gender")}
                />
                {errors.gender && (
                  <p className="errorMsg">{errors.gender.message}</p>
                )}
              </Form.Group>

              <div className="col-md-6">
                <label>Lrn number:</label>
                <input
                  className="form-control"
                  placeholder="XXXXXXXXXXXX"
                  type="number"
                  name="lrn"
                  {...register("lrn", {
                    required: "Lrn Number is required.",
                    min: 100000000000,
                    max: 999999999999,
                  })}
                />
                {errors.lrn && errors.lrn.type === "min" && (
                  <div className="errorMsg">
                    Your lrn number contains 12 digits.
                  </div>
                )}
                {errors.lrn && errors.lrn.type === "max" && (
                  <div className="errorMsg">
                    Please provide the proper lrn number dumbshit!.
                  </div>
                )}
                {errors.lrn && <p className="errorMsg">{errors.lrn.message}</p>}
              </div>
            </div>
            {/* ---------------------------------------------------------------------ADDRESS SECTION-------------------------------------------------------------------------------- */}

            <div className="title">
              <div className="text-center">
                <label>
                  <h4>Address section</h4>
                </label>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-7">
                <label>Full address:</label>
                <input
                  className="form-control"
                  type="text"
                  name="fAdd"
                  {...register("fAdd", {
                    required: "Please fill this section",
                    maxLength: {
                      value: 50,
                      message: "Put the proper address bitch.",
                    },
                  })}
                />
                {errors.fAdd && (
                  <p className="errorMsg">{errors.fAdd.message}</p>
                )}
              </div>

              <div className="col-md-7">
                <label>House# /Street:</label>
                <input
                  className="form-control"
                  type="text"
                  name="street"
                  {...register("street", {
                    required: "Please fill this section.",
                    maxLength: {
                      value: 30,
                      message: "Put the proper address bitch!.",
                    },
                  })}
                />
                {errors.street && (
                  <p className="errorMsg">{errors.street.message}</p>
                )}
              </div>

              <div className="col-md-6">
                <label>Brgy:</label>
                <select
                  defaultValue={0}
                  className="form-select"
                  name="brgy"
                  {...register("brgy", {
                    validate: {
                      value: (val) => (val > 0 ? true : "select one option."),
                    },
                  })}
                >
                  <option value={0}>Open this Brgy menu</option>
                  <option value={1}>Brgy One</option>
                  <option value={2}>Brgy Two</option>
                  <option value={3}>Brgy Three</option>
                </select>
                {errors.brgy && (
                  <p className="errorMsg">{errors.brgy.message}</p>
                )}
              </div>

              <div className="col-md-4">
                <label>City:</label>
                <select
                  className="form-select"
                  name="city"
                  {...register("city", {
                    validate: {
                      value: (val) => (val > 0 ? true : "select one option."),
                    },
                  })}
                >
                  <option value={0}>Open this city menu</option>
                  <option value="1">City 1</option>
                  <option value="2">City 2</option>
                  <option value="3">City 3</option>
                  <option value="4">City 4</option>
                  <option value="5">City 5</option>
                  <option value="6">City 6</option>
                  <option value="7">City 7</option>
                  <option value="8">City 8</option>
                  <option value="9">City 9</option>
                  <option value="10">City 10</option>
                  <option value="11">City 11</option>
                  <option value="12">City 12</option>
                  <option value="13">City 13</option>
                  <option value="14">City 14</option>
                  <option value="15">City 15</option>
                  <option value="16">City 16</option>
                  <option value="17">City 17</option>
                  <option value="18">City 18</option>
                  <option value="19">City 19</option>
                  <option value="20">City 20</option>
                </select>
                {errors.city && (
                  <p className="errorMsg">{errors.city.message}</p>
                )}
              </div>

              <div className="col-md-2">
                <label>Zipcode:</label>
                <input
                  className="form-control"
                  placeholder="XXXXX"
                  name="zip"
                  type="number"
                  {...register("zip", {
                    required: "Please indicate your zipcode.",
                    min: 10000,
                    max: 99999,
                  })}
                />
                {errors.zip && <p className="errorMsg">{errors.zip.message}</p>}
                {errors.zip && errors.zip.type === "min" && (
                  <div className="errorMsg">
                    Please provide your zipcode properly.
                  </div>
                )}
                {errors.zip && errors.zip.type === "max" && (
                  <div className="errorMsg">
                    Please provide your zipcode properly.
                  </div>
                )}
              </div>

              <Form.Group className="col-md-6" controlId="pAdd">
                <label>Primary address:</label>
                <Form.Check
                  type="radio"
                  label="Yes"
                  value="yes"
                  {...register("pAdd", {
                    required: "Please confirm your address here.",
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="no"
                  {...register("pAdd")}
                />
                {errors.pAdd && (
                  <p className="errorMsg">{errors.pAdd.message}</p>
                )}
              </Form.Group>
            </div>
            <div className="form-control mt-3">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Write at-least 125 chars about yourself"
                type="text"
                name="sDes"
                {...register("sDes", {
                  required: "Please fill this section.",
                  minLength: 125,
                  maxLength: {
                    value: 1000,
                    message: "Thats too long !!",
                  },
                  validate: (value) => {
                    if (value.length <= 25) {
                      return "Keep going.";
                    } else if (value.length <= 75) {
                      return "almost there.";
                    } else if (value.length <= 125) {
                      return "thats long enough";
                    }
                    return true;
                  },
                })}
              />
              {errors.sDes && <p className="errorMsg">{errors.sDes.message}</p>}
            </div>

            {/* ---------------------------------------------------------------------REGISTER BUTTON-------------------------------------------------------------------------------- */}
            <div className="text-center">
              <button
                className="button btn btn-primary text-center"
                type="submit"
                onClick={() => {
                  reset({
                    keepValues: true,
                  });
                }}
              >
                Register
              </button>
            </div>
          </section>
        </section>
      </form>
    </div>
  );
}
