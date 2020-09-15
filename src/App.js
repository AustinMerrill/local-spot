import React, { useState } from "react";
import Nav from "./components/navBar/nav";
import SearchBar from "./components/searchBar/searchBar";
import Cities from "./components/Cities/cities";
import City from "./components/City/city";
import Footer from "./components/Footer/footer";
import "./App.css";
import Copyright from "./components/Copyright/copyright";
import SanAntonio from "./assets/images/SanAntonio.jpg";
import Austin from "./assets/images/austin.jpg";
import Dallas from "./assets/images/dallas.jpg";
function App() {
  const [data, setData] = useState([
    { city: "Dallas", image: Dallas },
    { city: "San Antonio", image: SanAntonio },
    { city: "Austin", image: Austin },
  ]);
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      {/* <Cities /> */}
      <City cityData={data} />
      <Footer />
      <Copyright />
      {/* <Cities>
        <City />
        <City />
        <City />
      </Cities> */}
    </div>
  );
}

export default App;
