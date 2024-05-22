import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className='hero__section'>
      <div className="container">
         <h1>Shop With Us</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br /> assumenda ea quo cupiditate facere deleniti fuga officia.</p>
         <div className='hero__section__btns d-flex gap-1 mt-5'>
          <button className='hero__section__btns__shop'>SHOP NOW</button>
          <button className='hero__section__btns__club'>CLUB MEMBERSHIP</button>
         </div>
      </div>
    </section>
  )
}

export default HeroSection