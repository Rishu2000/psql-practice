import React from 'react'
import Header from "../homePage/Header";
import AddRestaurants from '../homePage/AddRestaurants';
import RestaurantsList from "../homePage/RestaurantsList";

const Home = () => {
    return (
        <div>
          <Header/>
          <AddRestaurants/>
          <RestaurantsList/>
        </div>
    )
}

export default Home