import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { CallEle } from "../about/AboutCall";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactLanding() {
  return (
    <>
      <section className="contact-landing">
        <div className="contianer mx-auto">
          <div className="top-content">
            <h1>Get in Touch</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fefefe"
                fillOpacity="1"
                d="M0,224L1440,128L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="bottom-content">
        <Map />
      </div>
    </>
  );
}
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
function Map() {
  const position = [51.505, -0.09];
  const data = [
    {
      id: "lc-1",
      icon: "fa-solid fa-location-dot",

      heading: "Address",
      text: `Moonshine St. 14/05 Light City
    ,London, United Kingdom`,
      text2: "",
    },
    {
      id: "lc-2",
      icon: "fa-solid fa-phone",
      heading: "Phone",
      text: "00 (123) 456 78 90",
      text2: "00 (423) 125 85 99",
    },
    {
      id: "lc-3",
      icon: "fa-solid fa-envelope",
      heading: "mail",
      text: "sandbox@email.com",
      text2: "abodtlos60@gmail.com",
    },
  ];
  return (
    <div className="map flex flex-col lap:flex-row">
      <div className="left lap:w-3/6">
        <MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <button
            className="click-marker"
            onClick={() => {
              document.querySelector(".leaflet-container").click();
              document.querySelector(".leaflet-container").click();
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          </button>{" "}
        </MapContainer>
      </div>
      <div className="right lap:w-3/6">
        {data.map((el) => {
          return <CallEle key={el.id} e={el} />;
        })}
      </div>
    </div>
  );
}
