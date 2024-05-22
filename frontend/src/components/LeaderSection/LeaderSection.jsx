import React from 'react'
import "./LeaderSection.css"

const LeaderSection = () => {
  return (
    <section className='leader__section pt-5'>
     <div className="container">
        <div className='leader__section__heading text-center'>
            <h3>TEAM</h3>
            <h2>Leadership</h2>
        </div>

        <div className='leader__section__users d-flex justify-content-between'>
            <div className='leader__section__user text-center mt-4'>  
           <img width={"262px"} height={"262px"} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
           <h3 className='mt-3'>John Rooster</h3>
           <span>CO-FOUNDER, PRESIDENT</span>
           <p className='mt-3'>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
           <div className='leader__section__icons d-flex gap-2 justify-content-center pt-2'>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
           </div>
            </div>

            <div className='leader__section__user text-center mt-4'>  
           <img width={"262px"} height={"262px"} src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" />
           <h3 className='mt-3'>Tom Sharp</h3>
           <span>CO-FOUNDER, COO</span>
           <p className='mt-3'>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
           <div className='leader__section__icons d-flex gap-2 justify-content-center pt-2'>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
           </div>
            </div>

            <div className='leader__section__user text-center mt-4'>  
           <img width={"262px"} height={"262px"} src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" />
           <h3 className='mt-3'>Winston Hodson</h3>
           <span>MARKETING</span>
           <p className='mt-3'>Nisi at consequatur unde molestiae quidem <br /> provident voluptatum deleniti quo iste error eos <br /> est praesentium distinctio cupiditate tempore <br /> suscipit inventore deserunt tenetur.</p>
           <div className='leader__section__icons d-flex gap-2 justify-content-center pt-2'>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
           </div>
            </div>
        </div>
     </div>
    </section>  
  )
}

export default LeaderSection