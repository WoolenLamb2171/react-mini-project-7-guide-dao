import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";

function App() {
  const [marker, setMarker] = useState();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYm9vYW5kcmV3IiwiYSI6ImNrd3M2ZGF1YzBhcDEyb21obzUwcDlvNXMifQ.q0NAPJB4RMgRRI8Fi9PWZg";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([37.6173, 55.7558])
      .addTo(map);
    setMarker(marker);

    return () => {};
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  const handleShopChange = (event) => {
    console.log(event.target.value);
    marker.setLngLat(stores[event.target.value]);
  };

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleShopChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
