import React, { useState } from 'react'
import axios from "../apis/RestaurantFinder";

const AddRestaurants = () => {

const [name, setName] = useState();
const [location, setLocation] = useState();
const [priceRange, setPriceRange] = useState("Price Range");

const addRestaurants = async (e) => {
    e.preventDefault();
    const response = await axios.post('/', {name, location, price_range:priceRange});
    console.log(response.data);
}

    return (
        <div className="mb-4">
            <form onSubmit={addRestaurants} action="" className="text-center" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="form-row text-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"80%"}}>
                    <div className="col">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2" value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            style={{width:"100%", height:"100%", padding:"5px"}}>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mx-2">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurants
