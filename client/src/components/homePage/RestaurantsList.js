import React, {useContext, useEffect} from 'react'
import axios from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantsList = (props) => {

const {restaurants, setRestaurants} = useContext(RestaurantsContext);

useEffect(() => {
    const getRestaurnats = async () => {
        try{
            const response = await axios.get('/');
            console.log(response.data.data.databaseResult);
            setRestaurants(response.data.data.databaseResult);
        }catch(e){
            console.log(e);
        }
    }
    getRestaurnats();
},[])

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
                    <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <div className="btn btn-info">Update</div>
                    </td>
                    <td>
                        <div className="btn btn-danger">Delete</div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantsList
