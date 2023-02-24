import React from "react";
//import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
//import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import $ from "jquery";

export default function Orders() {
  $(document).ready(function () {
    $("#example2").DataTable({
      responsive: true,
      destroy: true,
    });
  });

  return (
    <div>
      <table id="example2" className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Products</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon2</td>
            <td>System Architect</td>
            <td>Products</td>
            <td>61</td>
            <td>2011-04-25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Products</td>
            <td>63</td>
            <td>2011-07-25</td>
            <td>$170,750</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Products</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Order Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
