import React from "react";
//import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
//import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import $ from "jquery";

export default function Transactions() {
  $(document).ready(function () {
    $("#example1").DataTable({
      responsive: true,
      destroy: true,
    });
  });

  return (
    <div>
      <table id="example1" className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date/Time</th>
            <th>Payment State</th>
            <th>Payment Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon1</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
            <td>Edinburgh</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011-07-25</td>
            <td>$170,750</td>
            <td>Edinburgh</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Payment ID</th>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date/Time</th>
            <th>Payment State</th>
            <th>Payment Type</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
