import React, { useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { Polygon } from "@react-google-maps/api";
import database from "../firebase.config";

export default function Polygons(props) {
  const [usdata, setUsdata] = React.useState([]);
  console.log(props.zipCode)
  useEffect(() => {
    var dbRef = null;
    if (props.zipCode && props.zipCode > 0) {
      dbRef = ref(database, props.stateName + "/");
      onValue(dbRef, (snapshot) => {
        var data = snapshot
          .val()
          .filter((element) => element.Zipcode === props.zipCode);
        if (props.school > 0 || props.married > 0 || props.crime > 0) {
          data = filterRes(data);
        }
        setUsdata(data);
      });
      if (usdata.length === 0) {
        alert("No matches found.");
      }
    } else if (props.stateName && props.stateName.length > 0) {
      dbRef = ref(database, props.stateName + "/");
      onValue(dbRef, (snapshot) => {
        var data = snapshot.val();
        if (props.school > 0 || props.married > 0 || props.crime > 0) {
          data = filterRes(data);
        }
        setUsdata(data);
      });
    } else {
      dbRef = ref(database, "Texas/");
      onValue(dbRef, (snapshot) => {
        var data = snapshot.val();
        if (props.school > 0 || props.married > 0 || props.crime > 0) {
          data = filterRes(data);
        }
        setUsdata(data);
      });
    }
  }, [props.school, props.married, props.crime]);

  let rows = [];
  props.setUSData(usdata);
  usdata.forEach((d) => {
    let latitude = d.MegaNodeLat;
    let longitude = d.MegaNodeLon;
    let innerData = {};
    Object.entries(d).forEach((entry) => {
      innerData[entry[0]] = entry[1];
    });
    const rectCoords = [
      { lat: latitude - 0.05, lng: longitude - 0.05 },
      { lat: latitude - 0.05, lng: longitude + 0.05 },
      { lat: latitude + 0.05, lng: longitude + 0.05 },
      { lat: latitude + 0.05, lng: longitude - 0.05 },
      { lat: latitude - 0.05, lng: longitude - 0.05 },
    ];

    function handleOnClick(e) {
      this.setOptions({ fillOpacity: 0.85 });
      props.setButtonPopup(true);
      props.setChild(innerData);
      props.setClicked(true);
      props.setCenter({ lat: latitude, lng: longitude });
    }
    rows.push(
      <Polygon
        key={d.neighborhood_name}
        paths={rectCoords}
        options={{
          fillColor: "#E0786C",
          strokeColor: "#E0786B",
          strokeWeight: 1,
        }}
        onClick={handleOnClick}
      ></Polygon>
    );
  });

  function filterRes(data) {
    if (props.school > 0 && props.married > 0 && props.crime > 0) {
      return data.filter((element) => {
        let mathPro =
          (element.elem_avg_math_proficiency_percent +
            element.middle_avg_math_proficiency_percent +
            element.high_avg_math_proficiency_percent) /
          3;
        let languagePro =
          (element.elem_avg_la_proficiency_percent +
            element.middle_avg_la_proficiency_percent +
            element.high_avg_la_proficiency_percent) /
          3;
        let marriedR = element.percent_married;
        let crimeR = element.crime_frequency;
        let eduPro = (mathPro + languagePro) / 2;
        return (
          (!eduPro || isNaN(eduPro) || eduPro >= props.school) &&
          (!marriedR || isNaN(marriedR) || marriedR >= props.married) &&
          (!crimeR || isNaN(crimeR) || crimeR <= props.crime)
        );
      });
    } else if (props.school > 0 && props.married > 0) {
      return data.filter((element) => {
        let mathPro =
          (element.elem_avg_math_proficiency_percent +
            element.middle_avg_math_proficiency_percent +
            element.high_avg_math_proficiency_percent) /
          3;
        let languagePro =
          (element.elem_avg_la_proficiency_percent +
            element.middle_avg_la_proficiency_percent +
            element.high_avg_la_proficiency_percent) /
          3;
        let marriedR = element.percent_married;
        let eduPro = (mathPro + languagePro) / 2;
        return (
          (!eduPro || isNaN(eduPro) || eduPro >= props.school) &&
          (!marriedR || isNaN(marriedR) || marriedR >= props.married)
        );
      });
    } else if (props.school > 0 && props.crime > 0) {
      return data.filter((element) => {
        let mathPro =
          (element.elem_avg_math_proficiency_percent +
            element.middle_avg_math_proficiency_percent +
            element.high_avg_math_proficiency_percent) /
          3;
        let languagePro =
          (element.elem_avg_la_proficiency_percent +
            element.middle_avg_la_proficiency_percent +
            element.high_avg_la_proficiency_percent) /
          3;
        let crimeR = element.crime_frequency;
        let eduPro = (mathPro + languagePro) / 2;
        return (
          (!eduPro || isNaN(eduPro) || eduPro >= props.school) &&
          (!crimeR || isNaN(crimeR) || crimeR <= props.crime)
        );
      });
    } else if (props.married > 0 && props.crime > 0) {
      return data.filter((element) => {
        let marriedR = element.percent_married;
        let crimeR = element.crime_frequency;
        return (
          (!marriedR || isNaN(marriedR) || marriedR >= props.married) &&
          (!crimeR || isNaN(crimeR) || crimeR <= props.crime)
        );
      });
    } else if (props.school > 0) {
      return data.filter((element) => {
        let mathPro =
          (element.elem_avg_math_proficiency_percent +
            element.middle_avg_math_proficiency_percent +
            element.high_avg_math_proficiency_percent) /
          3;
        let languagePro =
          (element.elem_avg_la_proficiency_percent +
            element.middle_avg_la_proficiency_percent +
            element.high_avg_la_proficiency_percent) /
          3;
        let eduPro = (mathPro + languagePro) / 2;
        return !eduPro || isNaN(eduPro) || eduPro >= props.school;
      });
    } else if (props.married > 0) {
      return data.filter((element) => {
        let marriedR = element.percent_married;
        return !marriedR || isNaN(marriedR) || marriedR >= props.married;
      });
    } else if (props.crime > 0) {
      return data.filter((element) => {
        let crimeR = element.crime_frequency;
        return !crimeR || isNaN(crimeR) || crimeR <= props.crime;
      });
    }
  }

  return rows;
}
