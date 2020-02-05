import React from "react";

import { hot } from "react-hot-loader";

import { Container, Row, Col, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { useInterval } from "./hooks";
import { OffersTable } from "./components/OfferTable";

const initialOffers = {};
const dd = new Date();

const createRandomEntry = i => ({
  id: i,
  date: new Date(dd.setMinutes(dd.getMinutes() + i * 10)),
  amount: Math.random() * 10,
  bid: 9.5 + Math.random()
});

for (let i = 0; i < 10; i++) {
  initialOffers[i] = createRandomEntry(i);
}

const App = () => {
  const [offers, updateOffers] = React.useState(initialOffers);

  useInterval(() => {
    // We can do this because we know we are going up numerically
    // This would not work if we were able to delete items
    const nextIndex = Object.keys(offers).length;

    const newOffers = {
      ...offers,
      [nextIndex]: createRandomEntry(nextIndex)
    };

    updateOffers(newOffers);
  }, 5000);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Offers</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <OffersTable offers={offers} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default hot(module)(App);
