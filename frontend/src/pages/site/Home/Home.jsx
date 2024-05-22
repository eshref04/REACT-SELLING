import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import HeroSection from '../../../components/HeroSection/HeroSection'
import CardsSection from '../../../components/CardsSection/CardsSection'
import LeaderSection from '../../../components/LeaderSection/LeaderSection'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <HeroSection/>
           <CardsSection/>
           <LeaderSection/>
    </>
    )
}

export default Home
        