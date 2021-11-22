// to use JSX, import:
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
  Card,
  Stack,
  CardGroup,
  Navbar,
  Nav,
  Modal,
  Alert,
} from "react-bootstrap";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PopUp from "./PopUp";
import mapStyles from "./mapStyles";
import Polygons from "./Polygons";
import "./Map.css";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import stateCenter from "../data/stateCenter.js";

const apiKey = "AIzaSyByfO2sFqAk7P42urho3gx6GU5ArzeCzpM";
const libraries = ["places"];
const mapContainerStyle = {
  width: "40vw",
  height: "100vh",
  "z-index": 0,
};
//TODO change it to adjust according to the screen.

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function SimpleMap() {
  const [usdata, setUsdata] = React.useState([]);
  const [comparestatus, setComparestatus] = React.useState(true);
  const [schoolQuality, setSchoolQuality] = React.useState(0);
  const [pctMarried, setPctMarried] = React.useState(0);
  const [crimeRate, setCrimeRate] = React.useState(0);

  // Input from the search bar
  const location = useLocation();
  var center;
  var zoomLevel;
  var stateName;
  var zipcode;
  if (location.state) {
    console.log("enter");
    if (location.state.state.length > 0) {
      stateName = location.state.state.toUpperCase();
      if (stateName.length === 2) {
        if (stateCenter[stateName]) {
          stateName = stateCenter[stateName]["state"];
        }
      } else {
        stateName = stateName.toLowerCase();
        var stateNameArr = stateName.split(" ");
        stateName = "";
        stateNameArr.forEach((element) => {
          stateName += element.charAt(0).toUpperCase() + element.slice(1) + " ";
        });
        stateName = stateName.substring(0, stateName.length - 1);
      }
      if (!stateCenter[stateName]) {
        stateName = "";
        zoomLevel = 6;
        center = { lat: 31, lng: -100 };
        zipcode = "";
      } else {
        center = {
          lat: parseFloat(stateCenter[stateName]["latitude"]),
          lng: parseFloat(stateCenter[stateName]["longitude"]),
        };
        zoomLevel = parseInt(stateCenter[stateName]["zoom"]);
      }
    }
    if (location.state.zipcode.length > 0) {
      zipcode = parseInt(location.state.zipcode);
    }
  } else {
    stateName = "";
    zoomLevel = 6;
    center = { lat: 31, lng: -100 };
    zipcode = "";
  }
  return (
    <Container fluid>
      <MapNavBar
        setSchoolQuality={setSchoolQuality}
        setPctMarried={setPctMarried}
        setCrimeRate={setCrimeRate}
      >
        <CompareButton>
          <Button
            id="compareBtn"
            onClick={() => {
              setComparestatus(!comparestatus);
            }}
            variant="outline-danger"
            size="lg"
          >
            {comparestatus ? "Compare" : "Back"}
          </Button>{" "}
        </CompareButton>
      </MapNavBar>
      {/* <Container> */}
      <Row>
        {/* style={{ marginLeft: "5vw" }} */}
        <Col className="justify-content-start">
          <MapContainer
            setUsdata={setUsdata}
            schoolQuality={schoolQuality}
            pctMarried={pctMarried}
            crimeRate={crimeRate}
            center={center}
            zoomLevel={zoomLevel}
            stateName={stateName}
            zipcode={zipcode}
          />
        </Col>
        <Col className="justify-content-end">
          <SideList comparestatus={comparestatus} usdata={usdata} />
        </Col>
      </Row>
      {/* </Container> */}
    </Container>
  );
}

function ComparePanel({ comparelist }) {
  return (
    <div>
      <CardGroup className="compareCardGroup">
        {comparelist.length > 0 ? (
          comparelist.map((card) => (
            <CompareCard
              key={card.neighborhood_name}
              data={card}
              img={`https://source.unsplash.com/collection/2470439/${parseInt(
                card.neighborhood_name.split("-")[1]
              )}`}
            />
          ))
        ) : (
          <Alert variant="danger">Add something to compare!</Alert>
        )}
      </CardGroup>
    </div>
  );
}

// {/* <h1>Add something to compare!</h1> */}

function CompareCard({ data, img }) {
  return (
    // <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img
        src={img}
        variant="top"
        alt=""
        className="compareimage"
      ></Card.Img>
      <Card.Title className="text-center">{data.neighborhood_name}</Card.Title>
      <Card.Body className="text-center">
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
    // </div>
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
  const [center, setCenter] = React.useState(props.center);

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
        zoom={props.zoomLevel}
        center={center}
        options={options}
      >
        <Polygons
          stateName={props.stateName}
          zipCode={props.zipcode}
          school={props.schoolQuality}
          married={props.pctMarried}
          crime={props.crimeRate}
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

function MapNavBar(props) {
  return (
    <Navbar className="mapnavbar" expand="md">
      {/* <Container> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle-btn" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-3" id="filterMD">
          <Filter
            type={"School Quality"}
            code={1}
            setVal={props.setSchoolQuality}
          />
          <Filter
            type={"Percent Married"}
            code={2}
            setVal={props.setPctMarried}
          />
          <Filter type={"Crime Rate"} code={3} setVal={props.setCrimeRate} />
          <ResetFilter
            resetSchool={props.setSchoolQuality}
            resetMarried={props.setPctMarried}
            resetCrime={props.setCrimeRate}
          />
          <Save />
        </Nav>
        <Nav>{props.children}</Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

function SideList(props) {
  // what's currently displayed in compare function
  const [comparelist, setComparelist] = useState([]);

  // track if any items added to commpare list
  const [checkedstatus, setCheckedbutton] = useState(new Map());

  // decide whether to show "can only compare two items"
  const [showalert, setShowalert] = useState(false);

  // check usdata, if empty add a return statement to render a empty div
  if (props.usdata.length === 0) {
    return <div />;
  }

  /**
   * Switch the checked status of this neighbourhood and add/substract it to comparelist
   * @param {String} nname Name of the neighbourhood
   */
  function switchCompare(nname) {
    const found = props.usdata.find((item) => item.neighborhood_name === nname);

    if (checkedstatus.get(nname) === true) {
      // n exists, substract it
      setComparelist(
        comparelist.filter((item) => item.neighborhood_name !== nname)
      );
      setCheckedbutton(checkedstatus.set(nname, false));
    } else {
      // check if the list is full
      if (comparelist.length === 2) {
        setShowalert(true);
        console.log(showalert);
      } else {
        //n does not exist, add it
        setComparelist([...comparelist, found]);
        setCheckedbutton(checkedstatus.set(nname, true));
      }
    }
  }

  return (
    <div>
      <CompareAlert showalert={showalert} setShowalert={setShowalert} />
      <div>
        {props.comparestatus ? (
          <SideCardsPanel>
            <Page
              data={props.usdata}
              switchCompare={switchCompare}
              checkedstatus={checkedstatus}
            ></Page>
          </SideCardsPanel>
        ) : (
          <ComparePanel comparelist={comparelist}></ComparePanel>
        )}
      </div>
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
  return (
    <div className="listcard">
      <Col className="col-2">
        <img src={props.img} alt="" className="listcardimage" />
      </Col>
      <Col style={{ flexDirection: "column", justifyContent: "center" }}>
        <Row>
          <Col className="cardtitle">{props.data.neighborhood_name}</Col>
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
      </Col>
      {props.children}
    </div>
  );
}

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
    <Stack>
      <h3 className="carddatatitle">{props.title}</h3>
      <h5 className="carddatabody">{val}</h5>
    </Stack>
  );
}

function Filter(props) {
  if (props.code === 3) {
    return (
      <>
        <DropdownButton
          title={props.type}
          variant="outline-secondary"
          size="lg"
        >
          <Dropdown.Item
            eventKey="1"
            onClick={() => props.setVal(crimeFilterOnClick(1))}
          >
            <h3>Low</h3>
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => props.setVal(crimeFilterOnClick(2))}
          >
            <h3>Medium</h3>
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="3"
            onClick={() => props.setVal(crimeFilterOnClick(3))}
          >
            <h3>High</h3>
          </Dropdown.Item>
        </DropdownButton>
      </>
    );
  }
  return (
    <>
      <DropdownButton
        title={props.type}
        variant="outline-secondary"
        className="filter"
        size="lg"
      >
        <Dropdown.Item
          eventKey="1"
          onClick={() => props.setVal(filterOnClick(1))}
        >
          <h3>Low</h3>
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          onClick={() => props.setVal(filterOnClick(2))}
        >
          <h3>Medium</h3>
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          onClick={() => props.setVal(filterOnClick(3))}
        >
          <h3>High</h3>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}
function filterOnClick(level) {
  if (level === 1) {
    return 1;
  } else if (level === 2) {
    return 34;
  } else {
    return 67;
  }
}

function crimeFilterOnClick(level) {
  if (level === 1) {
    return 34;
  } else if (level === 2) {
    return 67;
  } else {
    return 100;
  }
}

function ResetFilter(props) {
  return (
    <>
      <Button
        variant="outline-secondary"
        size="lg"
        onClick={() => {
          props.resetSchool(0);
          props.resetMarried(0);
          props.resetCrime(0);
        }}
      >
        Reset Filters
      </Button>{" "}
    </>
  );
}

function Save() {
  return (
    <>
      <Button id="saveBtn" variant="outline-danger" size="lg">
        Save Search
      </Button>{" "}
    </>
  );
}

function CompareButton(props) {
  return <div>{props.children}</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleItems: {},
      pageOfItems: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    this.setState({
      exampleItems: sideListRender(this.props.data),
      pageOfItems: [],
    });
  }

  render() {
    return (
      <div>
        {/* <div className="container"> */}
        <div className="text-center">
          {this.state.pageOfItems.map((item) => (
            <SideListCard
              key={item.props.data.neighborhood_name}
              img={`https://source.unsplash.com/collection/2470439/${parseInt(
                item.props.data.neighborhood_name.split("-")[1]
              )}`}
              data={item.props.data}
            >
              <Button
                bsPrefix="plusbutton"
                onClick={() =>
                  this.props.switchCompare(item.props.data.neighborhood_name)
                }
                checked={this.props.checkedstatus.get(
                  item.props.data.neighborhood_name
                )}
              >
                {this.props.checkedstatus.get(item.props.data.neighborhood_name)
                  ? "-"
                  : "+"}
              </Button>{" "}
            </SideListCard>
          ))}
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
          />
        </div>
        {/* </div> */}
        <hr />
      </div>
    );
  }
}

function CompareAlert({ showalert, setShowalert }) {
  const handleClose = () => setShowalert(false);
  return (
    <div>
      <Modal show={showalert} onHide={handleClose} centered animation={false}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <h1>Cannot Compare More Than Two Neighbourhoods</h1>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
