import React from "react";
import { Link } from "react-router-dom";
import CompletePur from "./CompletePur";
import FooterCus from "./FooterCus";
import NavbarCus from "./NavbarCus";
import PendingPur from "./PendingPur";

export default function Purchases() {
  return (
    <div>
      <NavbarCus />
      <div style={{ margin: "50px" }}>
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to={"/"}
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
                Home
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
            className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
            data-tabs-toggle="#myTabContent"
            id="myTab"
            role="tablist"
          >
            <li className="w-full">
              <button
                className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                id="pending-tab"
                data-tabs-target="#pending"
                type="button"
                role="tab"
                aria-controls="pending"
                aria-selected="false"
              >
                Pending Purchases
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                id="complete-tab"
                data-tabs-target="#complete"
                type="button"
                role="tab"
                aria-controls="complete"
                aria-selected="false"
              >
                Complete Purchases
              </button>
            </li>
          </ul>
        </div>

        <div id="myTabContent">
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="pending"
            role="tabpanel"
            aria-labelledby="pending-tab"
          >
            <PendingPur />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="complete"
            role="tabpanel"
            aria-labelledby="complete-tab"
          >
            <CompletePur />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterCus />
    </div>
  );
}
