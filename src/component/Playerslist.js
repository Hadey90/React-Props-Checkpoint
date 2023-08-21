// src/PlayersList.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player"; // Import your Player component here
import playersData from "./players"; // Import your player data here

const PlayersList = () => {
  return (
    <Container>
      <Row>
        {playersData.map((player, index) => (
          <Col key={index} md={3} className="m-4">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
