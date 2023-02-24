import React from "react";
//import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
//import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import $ from "jquery";

export default function Purchases() {
  $(document).ready(function () {
    $("#example3").DataTable({
      responsive: true,
      destroy: true,
    });
  });

  return (
    <div>
      <table id="example3" className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Date/Time</th>
            <th>Purchase Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon3</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Date/Time</th>
            <th>Purchase Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
