import React from "react";

export default function Tooltip() {
  return (
    <div>
      <ul>
        <li>
          <p style={{ textAlign: "center" }}>
            <strong>Loan Details</strong>
          </p>
          <hr />
        </li>
        <li>
          <p>
            <strong>Total Loan: </strong>15000.00
          </p>
        </li>
        <li>
          <p>
            <strong>Used Amount: </strong>7000.00
          </p>
        </li>
        <li>
          <p>
            <strong>Paid Amount: </strong>3000.00
          </p>
        </li>
        <li>
          <p>
            <strong>Pending Amount: </strong>4000.00
          </p>
        </li>
        <li>
          <p>
            <strong>Loan Balance: </strong>8000.00
          </p>
        </li>
      </ul>
    </div>
  );
}
