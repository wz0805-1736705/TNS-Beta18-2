// to use JSX, import:
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
  Card,
  Stack,
  CardGroup,
} from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PopUp from "./PopUp";
import mapStyles from "./mapStyles";
import Polygons from "./Polygons";
import "./Map.css";

const apiKey = "AIzaSyByfO2sFqAk7P42urho3gx6GU5ArzeCzpM";
const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "70vh",
};
// const center = {
//     lat: 47,
//     lng: -122,
// };
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function SimpleMap() {
  const [usdata, setUsdata] = React.useState([]);
  const [comparestatus, setComparestatus] = React.useState(true);

  return (
    <Container id="neighborContainer">
      <Row>
        <Col>
          <MapNavBar>
            <CompareButton>
              <Button
                onClick={() => {
                  setComparestatus(!comparestatus);
                }}
                className="compare"
              >
                {comparestatus ? "Compare" : "Back"}
              </Button>{" "}
            </CompareButton>
          </MapNavBar>
        </Col>
      </Row>
      <Row id="mapAndList">
        <Col>
          <MapContainer setUsdata={setUsdata} />
        </Col>
        <Col>
          <SideList comparestatus={comparestatus} usdata={usdata} />
        </Col>
      </Row>
    </Container>
  );
}

function ComparePanel({ children }) {
  return (
    <div>
      <CardGroup className="compareCardGroup">{children}</CardGroup>
    </div>
  );
}

function CompareCard({ data }) {
  // console.log(data);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img
          src="CardPlaceHolder.png"
          alt=""
          className="compareCardImage"
        ></img>
        <Card.Title>{data.neighborhood_name}</Card.Title>
        <Card.Body>
          <CardData title="Median Home Value" data={[data.median_home_value]} />
          <CardData
            title="Number of Schools"
            data={[
              data.elem_number_schools,
              data.middle_number_schools,
              data.high_number_schools,
            ]}
          />
          <CardData title="Safety Rate" data={[data.crime_frequency]} />
          <CardData
            title="Politics"
            data={[data.percent_republican, data.percent_democrat]}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function MapContainer(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [child, setChild] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);
  const [center, setCenter] = React.useState({ lat: 47, lng: -122 });

  if (!isLoaded) return "Loading Maps";
  if (loadError) return "Error loading maps";

  function popupRender() {
    let res = (
      <div id="neighborPopup">
        <h1 id="neighborName">{child.neighborhood_name}</h1>
        <h2 id="neighborLocation">Location:</h2>
        <h4>State</h4>
        <h5>{child.State}</h5>
        <h4>Population Density</h4>
        <h5>{checkIfValueExist(child.pop_density_per_sqmi)}</h5>
        <h2 id="neighborLocation">Investability:</h2>
        <h4>Last Year Home Appreciation Percent</h4>
        <h5>{checkIfValueExist(child.last_year_home_appreciation_percent)}</h5>
        <h2 id="neighborLocation">Demographic:</h2>
        <h4>Percent Married</h4>
        <h5>{getSumOfNumbers(child.percent_married)}%</h5>
        <h4>Percent Boomer</h4>
        <h5>{getSumOfNumbers(child.Boomer_percent)}%</h5>
        <h2 id="neighborLocation">Education Quality:</h2>
        <h4>Number of Schools</h4>
        <h5>
          {parseInt(checkIfValueExist(child.elem_number_schools)) +
            parseInt(checkIfValueExist(child.middle_number_schools)) +
            parseInt(checkIfValueExist(child.high_number_schools))}
        </h5>
        <h4>Average Math Proficiency Percent</h4>
        <h5>
          {getSumOfNumbers(
            child.elem_avg_math_proficiency_percent,
            child.middle_avg_math_proficiency_percent,
            child.high_avg_math_proficiency_percent
          )}
          %
        </h5>
        <h4>Average Language Proficiency Percent</h4>
        <h5>
          {getSumOfNumbers(
            child.elem_avg_la_proficiency_percent,
            child.middle_avg_la_proficiency_percent,
            child.high_avg_la_proficiency_percent
          )}
          %
        </h5>
        <h2 id="neighborLocation">Safety &amp; Crime:</h2>
        <h4>Crime Rate:</h4>
        <h5>{checkIfValueExist(child.crime_frequency)}</h5>
        <h2 id="neighborLocation">Politics:</h2>
        <h4>Percent Democrat:</h4>
        <h5>{checkIfValueExist(child.percent_democrat)}%</h5>
        <h4>Percent Republican:</h4>
        <h5>{checkIfValueExist(child.percent_republican)}%</h5>
      </div>
    );
    return res;
  }

  function checkIfValueExist(val) {
    if (!val) {
      return "Unavailable";
    } else {
      return val;
    }
  }

  function getSumOfNumbers(...val) {
    if (!val || val.length === 0) {
      return 0;
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < val.length; i++) {
      if (!val[i]) {
        sum += 0;
      } else {
        sum += parseInt(val[i]);
        count++;
      }
    }
    return Math.floor((sum * 100) / count) / 100;
  }

  return (
    <div className="mapcontainer">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
      >
        <Polygons
          stateName="Washington"
          zipCode="98610"
          setUSData={props.setUsdata}
          setChild={setChild}
          setClicked={setClicked}
          setButtonPopup={setButtonPopup}
          setCenter={setCenter}
        />
        <PopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          setChildren={setChild}
          setClick={setClicked}
        >
          {clicked ? popupRender() : null}
        </PopUp>
      </GoogleMap>
    </div>
  );
}

let dropdownli = ["School Quality", "Percent Married", "Crime Rate", "More"];

function MapNavBar(props) {
  return (
    <Container className="mapnavbar">
      <Stack direction="horizontal">
        <SearchBar />
        <Filter type={dropdownli[0]} />
        <Filter type={dropdownli[1]} />
        <Filter type={dropdownli[2]} />
        <Filter type={dropdownli[3]} />
        <Save />
        {props.children}
      </Stack>
    </Container>
  );
}

function SideList({ usdata, comparestatus }) {
  // console.log(props.data);
  // cardCompareStatus = []
  // usdata.forEach(item => cardCompareStatus.push({item.neighborhood_name : false}))

  const [comparelist, setComparelist] = useState([]);

  const [checked, setChecked] = useState(false);

  function switchCompare(nname) {
    if (!checked) {
      const found = usdata.find((item) => item.neighborhood_name === nname);
      setComparelist([...comparelist, found]);
    } else {
      //delete it from list
      setComparelist(
        comparelist.filter((item) => item.neighborhood_name !== nname)
      );
    }
  }

  return (
    <div>
      {comparestatus ? (
        <SideCardsPanel>
          {usdata.map((item) => (
            <SideListCard key={item.neighborhood_name} data={item}>
              <ToggleButton
                onClick={() => switchCompare(item.neighborhood_name)}
                id="plus-button"
                checked={checked}
                type="checkbox"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                {checked ? "-" : "+"}
              </ToggleButton>{" "}
            </SideListCard>
          ))}
        </SideCardsPanel>
      ) : (
        <ComparePanel>
          {comparelist.map((card) => (
            <CompareCard key={card.neighborhood_name} data={card} />
          ))}
        </ComparePanel>
      )}
    </div>
  );
}

//want to integrate the data into sidelist
function SideCardsPanel({ children }) {
  return <div>{children}</div>;
}

function sideListRender(data) {
  let row = [];
  data.forEach((val) => {
    row.push(<SideListCard data={val} />);
  });
  return row;
}

function SideListCard(props) {
  // console.log(props.data);
  return (
    <Stack direction="horizontal" className="listcard">
      <img src="CardPlaceHolder.png" alt="" className="listcardimage" />
      <Container>
        <Row>
          <h1 style={{ alignSelf: "flex-start" }}>
            {props.data.neighborhood_name}
          </h1>
        </Row>
        <Row>
          <Col>
            <CardData
              title="Median Home Value"
              data={[props.data.median_home_value]}
            />
          </Col>
          <Col>
            <CardData
              title="Number of Schools"
              data={[
                props.data.elem_number_schools,
                props.data.middle_number_schools,
                props.data.high_number_schools,
              ]}
            />
          </Col>
          <Col>
            <CardData title="Safety Rate" data={[props.data.crime_frequency]} />
          </Col>
          <Col>
            <CardData
              title="Politics"
              data={[
                props.data.percent_republican,
                props.data.percent_democrat,
              ]}
            />
          </Col>
        </Row>
      </Container>
      {props.children}
    </Stack>
  );
}

// function SideListCard () {
//   return (
//     <Stack direction="horizontal" className="listcard">
//       <img src="CardPlaceHolder.png" className="listcardimage"/>
//       <Container>
//         <Row><h1 style={{alignSelf: "flex-start"}}>WA-01</h1></Row>
//         <Row>
//         <Col><CardData /></Col>
//         <Col><CardData /></Col>
//         <Col><CardData /></Col>
//         <Col><CardData /></Col>
//         </Row>
//       </Container>
//       <Button>Plus</Button>{' '}
//     </Stack>
// )
// }

function CardData(props) {
  var val = 0;
  if (props.title === "Median Home Value") {
    if (!props.data[0]) {
      val = "Unavailable";
    } else {
      val = props.data[0];
    }
  } else if (props.title === "Number of Schools") {
    if (!props.data[0] && !props.data[1] && !props.data[2]) {
      val = "Unavailable";
    } else {
      if (props.data[0]) {
        val += props.data[0];
      }
      if (props.data[1]) {
        val += props.data[1];
      }
      if (props.data[2]) {
        val += props.data[2];
      }
    }
  } else if (props.title === "Safety Rate") {
    if (!props.data[0]) {
      val = "Unavailable";
    } else {
      val = (1 - props.data[0]) * 100;
    }
  } else {
    if (!props.data[0] || !props.data[1]) {
      val = "Unavailable";
    } else {
      val = props.data[0] > props.data[1] ? "Republican" : "Democrat";
    }
  }
  return (
    <>
      <h3>{props.title}</h3>
      <h5>{val}</h5>
    </>
  );
}

function SearchBar() {
  return (
    <InputGroup
      style={{ width: "12vw", marginRight: "5vw", marginLeft: "5vw" }}
    >
      <FormControl className="mapsearch" placeholder="Where to?" />
    </InputGroup>
  );
}

function Filter({ type }) {
  return (
    <>
      <DropdownButton title={type} bsPrefix="mapfilter">
        <Dropdown.Item eventKey="1">Low</Dropdown.Item>
        <Dropdown.Item eventKey="2">Medium</Dropdown.Item>
        <Dropdown.Item eventKey="3">High</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

function Save() {
  return (
    <>
      <Button variant="outline-danger">Save Search</Button>{" "}
    </>
  );
}

function CompareButton(props) {
  return <div>{props.children}</div>;
}
