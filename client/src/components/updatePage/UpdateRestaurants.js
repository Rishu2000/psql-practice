import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateRestaurants = (props) => {
    const {id} = useParams();
    // console.log(id);
    return (
        <div>
            <form action="" className="action">
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="form-control" type="text"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="location">Location</label>
                    <input id="location" className="form-control" type="text"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="price_range">Price Range</label>
                    {/* <input id="name" className="form-control" type="text"/> */}
                    <select className="custom-select my-1 mr-sm-2" //value={priceRange}
                        //onChange={(e) => setPriceRange(e.target.value)}
                        style={{width:"100%", height:"100%", padding:"5px"}}>
                        <option disabled>Price Range</option>
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
