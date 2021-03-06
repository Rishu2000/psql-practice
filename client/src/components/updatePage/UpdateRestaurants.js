import React, { useState, useEffect } from 'react'
import axios from "../apis/RestaurantFinder"
import { useParams, useHistory } from 'react-router-dom'

const UpdateRestaurants = (props) => {

    const {id} = useParams();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    
    let history = useHistory();

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${id}`);
                const {location, name, price_range} = response.data.data;
                setName(name);
                setPriceRange(price_range);
                setLocation(location);
            }catch(err){
                console.dir(err);
            }
        }
        getData();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${id}`,{name,location,price_range:priceRange});
            console.log(response.data);
        }catch (err) {
            console.dir(err);
        }
        history.push('/');
    }

    return (
        <div>
            <form action="" className="action" onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}type="text"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="location">Location</label>
                    <input id="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} type="text"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="price_range">Price Range</label>
                    <select className="custom-select my-1 mr-sm-2" value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        style={{width:"100%", height:"100%", padding:"5px"}}>
                        <option default>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button type="submit"className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurants
