import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import update from 'immutability-helper';

export const Buildings = props => {
  const {resources} = props
  const { fish, yarn, cardboard, scratchingPost, fishingPort, barracks } = props.resources;  

  return (
    <React.Fragment>
    <Row>
      <Col md={5}>
        Scratching Post{" "}
        <span style={{ float: "right" }}>{resources.scratchingPost.total}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Bought</span>
        <Button
          variant="secondary"
          className="btnBuildings"
          onClick={() => {
          if (resources.cardboard.total >= resources.scratchingPost.priceCardboard) {
            const newScratchingPost = update(resources, {scratchingPost: {total: {$set: resources.scratchingPost.total + 1}}, 
              cardboard: {total: {$set: resources.cardboard.total - resources.scratchingPost.priceCardboard}}});
            props.updateState(newScratchingPost);
            //props.prtLog("You have bought a scratching post");
          } else {
            //props.prtLog("You can't afford a scratching post");
          }
        }}
        >
          Build
        </Button>
      </Col>
    </Row>
    <Row>
      <Col md={5}>
        Fishing Port{" "}
        <span style={{ float: "right" }}>{resources.fishingPort.priceCardboard}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Cardboard</span>
        {!resources.fishingPort.bought && (
          <Button
            variant="secondary"
            className="btnBuildings"
            onClick={() => {
              console.log("Button Pressed");
              console.log(fishingPort.bought);
              if (resources.cardboard.total >= resources.fishingPort.priceCardboard) {
                const newFishingPort = update(resources, {fishingPort: {bought: {$set: true}},
                  cardboard: {total: {$set: resources.cardboard.total - resources.fishingPort.priceCardboard}}});
                props.updateState(newFishingPort);
                //props.prtLog("You have bought the fishing post");
              } else {
                //props.prtLog("You can't afford the fishing port");
              }
            }}
          >
            Build
          </Button>
        )}
        {resources.fishingPort.bought && <h2 style={{ float: "right" }}> Bought </h2>}
      </Col>
    </Row>
    <Row>
      <Col md={5}>
        Barracks{" "}
        <span style={{ float: "right" }}>{barracks.priceCardboard}</span>
      </Col>
      <Col>
        <span style={{ float: "left" }}>Cardboard</span>
        {!resources.barracks.bought && (
          <Button
            variant="secondary"
            className="btnBuildings"
            onClick={() => {
              console.log("Button Pressed");
              console.log(barracks.bought);
              if (cardboard.total >= barracks.priceCardboard) {
                const newBarracks = update(resources, {barracks: {bought: {$set: true}},
                  cardboard: {total: {$set: resources.cardboard.total - resources.barracks.priceCardboard}}});
                props.updateState(newBarracks);
                //props.prtLog("You have bought the barracks");
              } else {
                //props.prtLog("You can't afford the barracks");
              }
            }}
          >
            Build
          </Button>
        )}
        {resources.barracks.bought && <h2 style={{ float: "right" }}> Bought </h2>}
      </Col>
    </Row>
    </React.Fragment>
  );
};

export default Buildings;
