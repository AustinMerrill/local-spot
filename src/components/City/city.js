import React from "react";

function City(props) {
  console.log(props);
  const cities = props.cityData;
  return (
    <div className="hero-container">
      {cities.map((city) => (
        <div className="san-antonio">
          <h2 className="city-name">
            <a>{city.city}</a>
          </h2>
          <img className="city-img" src={city.image} alt="san antonio"></img>
        </div>
      ))}
    </div>
  );
}

export default City;
