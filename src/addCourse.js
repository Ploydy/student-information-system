import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [course, setCourses] = useState({
    name: "",
    totalUnits: null,
    description: "",

  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCourses((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3001/course", course)
      navigate("/courses")
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="container card">
      <div className="form-title text-center">
        <h2 className="text-dark">New Course</h2>
        <span className="">Use the below form to create a new course</span>
      </div>

      <form action="/course" method="POST">
        <div className="newCourse">
          <div className="form-group">

            <input type="text" name="name" onChange={handleChange} placeholder="Course Name"></input>
          </div>
          <div className="form-group">

            <input type="number" name="totalUnits" onChange={handleChange} placeholder="Total Units"></input>
          </div>

          <div className="form-control mt-3">
            <textarea
              className="form-control"
              rows={5}
              placeholder="Description"
              type="text"
              name="description"
              onChange={handleChange}

            />

          </div>

          <button className="btn btn-info Save" onClick={handleClick} >Save</button>

        </div>


      </form>

    </div>
  )

};

export default AddCourse;