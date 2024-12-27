import React, { useState } from 'react'
import './Home.css'
import Header from '../../Compenents/Header/Header'
import ExploreMenu from '../../Compenents/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Compenents/FoodDisplay/FoodDisplay'
import AppDownload from '../../Compenents/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory]=useState('All');
    return (
        <div>
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category}  />
          <AppDownload />
        
        </div>
    )
}

export default Home
