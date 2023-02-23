import React from "react";
import { Link } from "react-router-dom";
//import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
//import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import $ from "jquery";
import "../admin/Users.css";

export default function Users() {
  $(document).ready(function () {
    $("#example").DataTable({
      responsive: true,
      destroy: true,
    });
  });

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to={"/admin"}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    User Details
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            User Details
          </h2>
          <br />

          <table
            id="example"
            className="display responsive nowrap"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23445</td>
                <td>Integration Specialist</td>
                <td>NewYork@gmail.com</td>
                <td>Complete</td>
                <td>
                  <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    className="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600"
                  >
                    <i className="fa-solid fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg px-2.5 py-1.5 text-sm text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium text-center mr-2 mb-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700"
                  >
                    Purchases
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium text-center mr-2 mb-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-700"
                  >
                    Payments
                  </button>
                  
                  <div
                    className="dropdown"
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    <button
                      className="px-2.5 py-1 text-md font-medium text-center mr-2 mb-2 text-black bg-gray-700 rounded-md border border-gray-200 dark:border-gray-300 hover:bg-gray-800 dark:bg-transparent dark:hover:bg-gray-200"
                      type="button"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul>
                      <li>
                        <p style={{ textAlign: "center" }}>
                          <strong>Loan Details</strong>
                          <hr />
                        </p>
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
                </td>
              </tr>
              <tr>
                <td>23445</td>
                <td>Integration Specialist</td>
                <td>NewYork@gmail.com</td>
                <td>Complete</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
