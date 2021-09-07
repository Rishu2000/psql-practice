import React from 'react'

const AddRestaurants = () => {
    return (
        <div className="mb-4">
            <form action="" className="text-center" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="form-row text-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:"60%"}}>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2" style={{width:"100%", height:"100%", padding:"5px"}}>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="btn btn-primary">Add</div>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurants
