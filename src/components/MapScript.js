import React from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import PopUp from "./PopUp";
import mapStyles from "./mapStyles";
import Polygons from "./Polygons";

const apiKey = 'AIzaSyByfO2sFqAk7P42urho3gx6GU5ArzeCzpM';
const libraries = ["places"];
const mapContainerStyle = {
    width: '50vw',
    height: '70vh',
};
const center = {
    lat: 47,
    lng: -122,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}
const paths = [
    { lat: 47, lng: -122 },
    { lat: 47.5, lng: -122 },
    { lat: 47.5, lng: -122.5 },
    { lat: 47, lng: -122.5 },
    { lat: 47, lng: -122}
]

export default function MapScript() {
    const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
    });
    const [buttonPopup, setButtonPopup] = React.useState(false);
    const [child, setChild] = React.useState(null);
    const [clicked, setClicked] = React.useState(false);
    
    
    if (!isLoaded) return "Loading Maps";
    if (loadError) return "Error loading maps";

    function popupRender() {
        let rows = [];
        rows.push(<h3>{child.neighborhood_name}</h3>);
        Object.entries(child).forEach(entry => {
            if (entry[0] != "neighborhood_name") {
                if (entry[1] != null) {
                    rows.push(<p>{entry[0]}: {entry[1]}</p>)
                }
            }
        });
        return rows;
    }

    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={7} center={center}options={options}>
                <Polygons stateName = "Washington" setChild={setChild} setClicked={setClicked} setButtonPopup={setButtonPopup}/>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} setChildren={setChild} setClick={setClicked}>
                    {clicked ? popupRender() : null}
                </PopUp>
            </GoogleMap>
        </div>
    );
}