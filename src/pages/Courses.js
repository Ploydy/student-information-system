import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Services() {
  const [courses, setCourses] = useState([]);


  const handleDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this course?") === true
    ) {
      const result = await fetch(`http://localhost:3001/course/${id}`, {
        method: "DELETE",
      });
      getCourses();
    }
  };

  const getCourses = async () => {
    // get
    const result = await fetch("http://localhost:3001/course");
    const res = await result.json();
    setCourses(res);
  };

  useEffect(() => {
    (async () => {
      getCourses();
    })();
  }, []);

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Courses</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-blue">
                <div className="icon">
                  <i className="bx bxl-dribbble" />
                </div>
                <h4>
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box iconbox-orange ">
                <div className="icon">
                  <i className="bx bx-file" />
                </div>
                <h4>
                  <a href="">Sed Perspiciatis</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-pink">
                <div className="icon">
                  <i className="bx bx-tachometer" />
                </div>
                <h4>
                  <a href="">Magni Dolores</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box iconbox-yellow">
                <div className="icon">
                  <i className="bx bx-layer" />
                </div>
                <h4>
                  <a href="">Nemo Enim</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box iconbox-red">
                <div className="icon">
                  <i className="bx bx-slideshow" />
                </div>
                <h4>
                  <a href="">Dele Cardo</a>
                </h4>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box iconbox-teal">
                <div className="icon">
                  <i className="bx bx-arch" />
                </div>
                <h4>
                  <a href="">Divera Don</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Course List</h2>
        <Link to="/AddCourse">
          <button className="btn btn-dark AddNewCourse">Add a new Course</button>
        </Link>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Course</th>
              <th scope="col">Total Units</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <th scope="row">{course.id}</th>
                <td>{course.name}</td>
                <td>{course.totalUnits}</td>
                <td>{course.description}</td>
                <td>
                  <Link to={`/updateCourse/${course.id}`}>
                    <button
                      className="btn btn-outline-info "
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
