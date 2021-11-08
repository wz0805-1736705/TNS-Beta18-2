import React, { useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { Polygon } from "@react-google-maps/api";
import database from "../firebase.config";

export default function Polygons(props) {

    const [usdata, setUsdata] = React.useState([]);

    useEffect(() => {
        var dbRef = null;
        if (props.zipCode && props.zipCode.length > 0) {
            console.log('1');
            dbRef = ref(database, props.stateName + '/');
            onValue(dbRef, (snapshot) => {
                console.log(snapshot.val());
                const data = snapshot.val().filter(element => element.Zipcode == props.zipCode);
                setUsdata(data);
            });
        } else if (props.stateName && props.stateName.length > 0) {
            console.log('2');
            dbRef = ref(database, props.stateName + '/')
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                setUsdata(data);
            });
        } else {
            console.log('3');
            dbRef = ref(database, '/')
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                setUsdata(data);
            });
        }
        // const dbRef = ref(database, props.stateName + '/');
        // onValue(dbRef, (snapshot) => {
        //   const data = snapshot.val();
        //   setUsdata(data);
        // });
    }, []);
    
    let rows = [];
    props.setUSData(usdata);
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
        rows.push(<Polygon key={d.neighborhood_name} paths={rectCoords} onClick={() => {props.setButtonPopup(true); props.setChild(innerData); props.setClicked(true); props.setCenter({lat: latitude, lng: longitude})}}></Polygon>) 
    })
    return rows;
}