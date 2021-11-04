import React, { useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { Polygon } from "@react-google-maps/api";
import database from "../firebase.config";

export default function Polygons(props) {

    const [usdata, setUsdata] = React.useState([]);

    useEffect(() => {
        const dbRef = ref(database, props.stateName + '/');
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          setUsdata(data);
        });
    }, []);
    
    if (props.stateName === "") {
        return "";
    }
    let rows = [];
    usdata.forEach(d => {
        let latitude = d.MegaNodeLat;
        let longitude = d.MegaNodeLon;
        let innerData = {};
        Object.entries(d).forEach(entry => {
            innerData[entry[0]] = entry[1];
        })
        const rectCoords = [
        {lat: latitude - 0.05, lng: longitude - 0.05},
        {lat: latitude - 0.05, lng: longitude + 0.05},
        {lat: latitude + 0.05, lng: longitude + 0.05},
        {lat: latitude + 0.05, lng: longitude - 0.05},
        {lat: latitude - 0.05, lng: longitude - 0.05}
        ];
        rows.push(<Polygon paths={rectCoords} onClick={() => {props.setButtonPopup(true); props.setChild(innerData); props.setClicked(true);}}></Polygon>) 
    })
    return rows;
}