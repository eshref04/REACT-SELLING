import React, { useContext, useEffect } from 'react'
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';


const Products = () => {
    const {data,setData}=useContext(MainContext)

    function deleteItem(id){

    axios.delete(`http://localhost:5000/api/products/${id}`).then((res)=>{
      setData([...data.filter((item)=>item._id!= id)])
    })
    }
  return (
    <table class=" mt-5  container table table-hover table-dark table-striped-columns">
      <Helmet>
      <title>
    Admin
      </title>
    </Helmet>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(item._id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Products
