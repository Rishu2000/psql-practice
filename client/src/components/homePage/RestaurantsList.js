import React, {useContext, useEffect} from 'react'
import axios from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../context/RestaurantsContext'
import {useHistory} from "react-router-dom";

const RestaurantsList = (props) => {

const {restaurants, setRestaurants} = useContext(RestaurantsContext);

let history = useHistory();

useEffect(() => {
    const getRestaurnats = async () => {
        try{
            const response = await axios.get('/');
            setRestaurants(response.data.data.databaseResult);
        }catch(e){
            console.log(e);
        }
    }
    getRestaurnats();
},[])

const handleDelete = async (id) => {
    try{
        const response = await axios.delete(`/${id}`);
        setRestaurants(restaurants.filter((resturant) => {
            return resturant.id !== id;
        }))
    }catch(e){
        console.log(e);
    }
}

const handleUpdate = (id) => {
    history.push(`/restaurants/${id}/update`);
}

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map((value) => (
                        <tr className="text-center" key={value.id}>
                        <th scope="row">{value.name}</th>
                        <td>{value.location}</td>
                        <td>{"$".repeat(value.price_range)}</td>
                        <td>@mdo</td>
                        <td>
                            <div className="btn btn-info" onClick={() => handleUpdate(value.id)}>Update</div>
                        </td>
                        <td>
                            <div className="btn btn-danger" onClick={() => handleDelete(value.id)}>Delete</div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantsList
