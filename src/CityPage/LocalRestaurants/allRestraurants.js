import React from "react";

function AllRestaurants() {
  return (
    <div className="all-restaurants-container">
      <h2 className="restaurant-title">Local Restaurants</h2>
      <Restaurants />
      <Restaurants />
      <Restaurants />
      <div className="view-all-btn">
        <button className="restaurants-btn btn">View All</button>
      </div>
    </div>
  );
}

export default AllRestaurants;
