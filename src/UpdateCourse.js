import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const initialState = {
  name: "",
  totalUnits: "",
  description: "",
};

function UpdateCourse() {
  const [state, setState] = useState(initialState);

  const { name, totalUnits, description } = initialState;

  const [course, setCourses] = useState({
    name: "",
    totalUnits: null,
    description: "",

  });

  const navigate = useNavigate()
  const location = useLocation()

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const responce = await axios.get(`http://localhost:3001/course/${id}`);
    if (responce.status === 200) {
      setState({ ...responce.data[0] })
    }
  }

  const courseId = location.pathname.split("/"[2])

  const handleChange = (e) => {
    setCourses((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:3001/course" + courseId, course)
      navigate("/courses")
    } catch (err) {
      console.log(err)
    }

  }




  return (
    <div className="container card">
      <div className="form-title text-center">
        <h2 className="text-dark">Update Course</h2>
        <span className="">Use the below form to update a course</span>
      </div>

      <form action="/course" method="POST">
        <div className="newCourse">
          <div className="form-group">

            <input type="text" name="name" value={name} onChange={handleChange} placeholder="Course Name"></input>
          </div>
          <div className="form-group">

            <input type="number" name="totalUnits" value={totalUnits} onChange={handleChange} placeholder="Total Units"></input>
          </div>

          <div className="form-control mt-3">
            <textarea
              className="form-control"
              rows={5}
              placeholder="Description"
              type="text"
              name="description"
              value={description}
              onChange={handleChange}

            />

          </div>

          <button className="btn btn-info Save" onClick={handleClick} >Save</button>

        </div>


      </form>

    </div>
  )

};

export default UpdateCourse;