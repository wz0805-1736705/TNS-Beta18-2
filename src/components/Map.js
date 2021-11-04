// to use JSX, import:
import React from "react";
import MapScript from "./MapScript";
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
} from "react-bootstrap";

import "./Map.css";

export default function simpleMap() {
  return (
    <Container>
      <Row>
        <Col>
          <MapNavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <MapContainer />
        </Col>
        <Col>
          <SideList />
        </Col>
      </Row>
    </Container>
  );
}

function MapContainer() {
  return (
    <div className="mapcontainer">
      <MapScript />
    </div>
  );
}

let dropdownli = ["School Quality", "Percent Married", "Crime Rate", "More"];

function MapNavBar() {
  return (
    <Container className="mapnavbar">
      <Stack direction="horizontal">
        <div>
          <SearchBar />
        </div>
        <div>
          <Filter type={dropdownli[0]} />
        </div>
        <div>
          <Filter type={dropdownli[1]} />
        </div>
        <div>
          <Filter type={dropdownli[2]} />
        </div>
        <div>
          <Filter type={dropdownli[3]} />
        </div>
        <div>
          <Save />
        </div>
      </Stack>
    </Container>
  );
}

function SideList() {
  return (
    <div className="sidelist">
      <SideListCard />
      <SideListCard />
      <SideListCard />
      <SideListCard />
    </div>
  );
}

function SideListCard() {
  return (
    <Stack direction="horizontal" className="listcard">
      <img src="CardPlaceHolder.png" className="listcardimage" />
      <Container>
        <Row>
          <h1 style={{ alignSelf: "flex-start" }}>WA-01</h1>
        </Row>
        <Row>
          <Col>
            <CardData />
          </Col>
          <Col>
            <CardData />
          </Col>
          <Col>
            <CardData />
          </Col>
          <Col>
            <CardData />
          </Col>
        </Row>
      </Container>
      <Button id="plus-button">Plus</Button>{" "}
    </Stack>
  );
  // return (
  //   <>
  //     <Card bsPrefix="listcard">
  //       <Card.Img src="CardPlaceHolder.png" bsPrefix="listcardimage" />
  //       <Card.Body bsPrefix="listcardbody">
  //         <Container>
  //           <Row>
  //             <h1>WA-01</h1>
  //           </Row>
  //           <Row>
  //             <Col>
  //               <CardData />
  //             </Col>
  //             <Col>
  //               <CardData />
  //             </Col>
  //             <Col>
  //               <CardData />
  //             </Col>
  //             <Col>
  //               <CardData />
  //             </Col>
  //           </Row>
  //         </Container>
  //       </Card.Body>
  //       <Button bsPrefix="plus_button" style={{ float: "right" }}>
  //         Plus
  //       </Button>{" "}
  //     </Card>
  //   </>
  // );
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

function CardData() {
  return (
    <>
      <h3>Some Content Here</h3>
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
