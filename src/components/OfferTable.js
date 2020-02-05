import React from "react";

import { Table } from "react-bootstrap";

import "./OfferTable.css";

export function OffersTable({ offers }) {
  return (
    <div className="tableContainer">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Amount</th>
            <th>BID</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(offers).map(i => {
            let offer = offers[i];
            return (
              <tr key={offer.id}>
                <td>{offer.id}</td>
                <td>{offer.date.toDateString()}</td>
                <td>{offer.amount}</td>
                <td>{offer.bid}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
