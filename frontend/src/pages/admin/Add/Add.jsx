import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import axios from "axios";


const Add = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "",description: "" }}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("http://localhost:5000/api/products/", {
              title: values.title,
              image: values.image,
              description: values.description
             
            })
            .then((res) => {
              setData([...data, res.data]);
              resetForm();
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container text-light p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-primary "
            onSubmit={handleSubmit}
          >

            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              className="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}

            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}

            <label htmlFor="description" className="form-label">
             Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="form-control"
              id="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}

           

           

            

            <button style={{width:"300px"}} className="btn btn-danger mt-3" type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;