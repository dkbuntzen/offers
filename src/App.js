import React from "react";
import { hot } from "react-hot-loader";

import "./App.css";

var offers = {};
var dd = new Date();

for (var i = 0; i < 10; i++) {
  offers[i] = {
    id: i,
    date: new Date(dd.setMinutes(dd.getMinutes() + i * 10)),
    amount: Math.random() * 10,
    bid: 9.5 + Math.random()
  };
}

const App = () => {
  return (
    <>
      <h1>Offers</h1>
      <ul>
        {Object.keys(offers).map(i => {
          let offer = offers[i];
          return <p key={offer.id}>{offer.amount}</p>;
        })}
      </ul>
    </>
  );
};

export default hot(module)(App);
