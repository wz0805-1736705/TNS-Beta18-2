// to use JSX, import:
import React, { Children } from "react";
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
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PopUp from "./PopUp";
import mapStyles from "./mapStyles";
import Polygons from "./Polygons";
import "./Map.css";
import { Compare } from "@material-ui/icons";

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
            <SearchBar />
            <Filter type={dropdownli[0]} />
            <Filter type={dropdownli[1]} />
            <Filter type={dropdownli[2]} />
            <Filter type={dropdownli[3]} />
            <Save />
            <CompareButton>
              <Button
                onClick={() => {
                  setComparestatus(!comparestatus);
                }}
                bsPrefix="compare"
              >
                Compare
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
          <SideList>
            {comparestatus ? (
              <SideCardsPanel data={usdata} />
            ) : (
              <ComparePanel>
                <CompareCard />
                <CompareCard />
              </ComparePanel>
            )}
          </SideList>
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

function CompareCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src="CardPlaceHolder.png" className="compareCardImage"></img>
        <Card.Title>WA-1</Card.Title>
        <Card.Body>Something Here</Card.Body>
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
    let rows = [];
    // console.log(child.Zipcode);
    rows.push(<h3>{child.neighborhood_name}</h3>);
    Object.entries(child).forEach((entry) => {
      if (entry[0] != "neighborhood_name") {
        if (entry[1] != null) {
          rows.push(
            <p>
              {entry[0]}: {entry[1]}
            </p>
          );
        }
      }
    });
    return rows;
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
      <Stack direction="horizontal">{props.children}</Stack>
    </Container>
  );
}

function SideList(props) {
  // console.log(props.data);
  return <div className="sidelist">{props.children}</div>;
}

//want to integrate the data into sidelist
function SideCardsPanel(props) {
  return props.data.map((item) => <SideListCard data={item} />);
}

function SideListCard(props) {
  return (
    <Stack direction="horizontal" className="listcard">
      <img src="CardPlaceHolder.png" className="listcardimage" />
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
      <Button id="plus-button">Plus</Button>{" "}
    </Stack>
  );
}

// TODO Add Selected Feature
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
  if (props.title == "Median Home Value") {
    if (!props.data[0]) {
      val = "Unavailable";
    } else {
      val = props.data[0];
    }
  } else if (props.title == "Number of Schools") {
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
  } else if (props.title == "Safety Rate") {
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
