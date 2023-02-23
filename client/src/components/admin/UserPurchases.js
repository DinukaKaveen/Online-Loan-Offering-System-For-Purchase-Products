import React from "react";
import { Link } from "react-router-dom";
import CompletePur from "../customer/purchases/CompletePur";
import PendingPur from "../customer/purchases/PendingPur";
import TopayPur from "../customer/purchases/TopayPur";
import ReturnPur from "../customer/purchases/ReturnPur";
import CancelPur from "../customer/purchases/CancelPur";

export default function UserPurchases() {
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
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    to={"/admin/Users"}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray"
                  >
                    Users
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray">
                    Purchases
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Purchased Products
          </h2>
          <br />

          <div className="mb-4">
            <ul
              className="text-md font-medium text-center text-gray-500 divide-y divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-white dark:text-gray-400"
              data-tabs-toggle="#myTabContent"
              id="myTab"
              role="tablist"
            >
              <li className="w-full">
                <button
                  className="inline-block rounded-l-lg rounded-r-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  id="topay-tab"
                  data-tabs-target="#topay"
                  type="button"
                  role="tab"
                  aria-controls="topay"
                  aria-selected="false"
                >
                  To Pay
                </button>
              </li>
              <li className="w-full">
                <button
                  className="inline-block rounded-l-lg rounded-r-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  id="pending-tab"
                  data-tabs-target="#pending"
                  type="button"
                  role="tab"
                  aria-controls="pending"
                  aria-selected="false"
                >
                  Pending
                </button>
              </li>
              <li className="w-full">
                <button
                  className="inline-block rounded-l-lg rounded-r-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  id="complete-tab"
                  data-tabs-target="#complete"
                  type="button"
                  role="tab"
                  aria-controls="complete"
                  aria-selected="false"
                >
                  Completed
                </button>
              </li>
              <li className="w-full">
                <button
                  className="inline-block rounded-l-lg rounded-r-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  id="return-tab"
                  data-tabs-target="#return"
                  type="button"
                  role="tab"
                  aria-controls="return"
                  aria-selected="false"
                >
                  Returns
                </button>
              </li>
              <li className="w-full">
                <button
                  className="inline-block rounded-l-lg rounded-r-lg w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  id="cancel-tab"
                  data-tabs-target="#cancel"
                  type="button"
                  role="tab"
                  aria-controls="cancel"
                  aria-selected="false"
                >
                  Cancellations
                </button>
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <div
              className="hidden"
              id="topay"
              role="tabpanel"
              aria-labelledby="topay-tab"
            >
              <TopayPur />
            </div>
            <div
              className="hidden"
              id="pending"
              role="tabpanel"
              aria-labelledby="pending-tab"
            >
              <PendingPur />
            </div>
            <div
              className="hidden"
              id="complete"
              role="tabpanel"
              aria-labelledby="complete-tab"
            >
              <CompletePur />
            </div>
            <div
              className="hidden"
              id="return"
              role="tabpanel"
              aria-labelledby="return-tab"
            >
              <ReturnPur />
            </div>
            <div
              className="hidden"
              id="cancel"
              role="tabpanel"
              aria-labelledby="cancel-tab"
            >
              <CancelPur />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
