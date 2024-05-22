import React, { useContext, useEffect, useState } from 'react'
import "./CardsSection.css"
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const CardsSection = () => {
 
  const {data,addToBasket} = useContext(MainContext)
  const [inpVal, setInpVal] = useState("")
const [sortBy, setSortBy] = useState(null)

  
  


  return (
    <section className='cards__section'>
     <div className="container p-5">
      <div className='cards__section__heading'>
        <h3>POPULAR PRODUCTS</h3>
        <h2>Our Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br /> nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br /> consequatur laboriosam ipsam.</p>
      </div>
      <input className='p-1' value={inpVal}  onChange={(e)=>{
  setInpVal(e.target.value)
}} type="text" placeholder="Search " />
<button onClick={()=>setSortBy({field:"title",asc:true})} className="btn btn-success mx-3  ">A-Z</button>
<button onClick={()=>setSortBy({field:"title",asc:false})} className="btn btn-success mx-3 ">Z-A</button>
<button onClick={()=>setSortBy({field:"price",asc:false})} className="btn btn-danger mx-3">Low To High</button>
<button onClick={()=>setSortBy({field:"price",asc:true})} className="btn btn-danger mx-3 ">High To Low</button>
      <div className='cards__section__crds d-flex gap-5 mt-5'>
        {
          data.filter(x=>x.title.toLowerCase().includes(inpVal.toLowerCase()))
          .sort((a,b)=>{
            if(!sortBy){
                return 0
            }else if(sortBy.asc==true){
                return (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
            }
            else if(sortBy.asc==false){
              return (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)

          }
}).map((item,index)=>(
            <div key={index} className='cards__section__crd d-flex flex-column align-items-center'>
            <img width={"350px"} height={"350px"} src={item.image} alt="" />
            <div className='cards__section__crd__body text-center mt-3 gap-3 d-flex flex-column'>
              <Link style={{fontSize:"18px"}}>{item.title}</Link>
   
              <div className='cards__section__crd__body__icons text-center d-flex justify-content-evenly'>
               <Link className="d-flex align-items-center gap-2" ><i  class="star__icon fa-solid fa-star"></i><span>5</span></Link>
               <Link className="d-flex align-items-center gap-2" ><i class="heart__icon fa-solid fa-heart"></i><span>29</span></Link>
              </div>
   
              <p  className='text-center'>{item.description}</p>
   
              <div className='cards__section__crd__body__btns d-flex gap-5 justify-content-center'>
              <Link ><button onClick={()=>{addToBasket(item._id)}} className='cards__section__crd__body__btns__cart'>CART</button></Link>
              <Link to={`/detail/${item._id}`}><button className='cards__section__crd__body__btns__view'>VIEW</button></Link>
              </div>
            </div>
            </div>
          ))
        }
      
      </div>
     </div>
    </section>
  )
}

export default CardsSection