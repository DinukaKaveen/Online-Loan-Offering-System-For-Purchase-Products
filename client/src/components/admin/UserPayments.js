import React from "react";
import { Link } from "react-router-dom";
import Pay from "../customer/payments/Pay";
import PaymentHistory from "../customer/payments/PaymentHistory";

export default function UserPayments() {
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
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    to={"/admin/Users"}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-gray"
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
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Payments
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Payments
          </h2>
          <br />

          <div className="mb-4 border-b border-gray-200 dark:border-gray-200">
            <ul
              className="flex flex-wrap -mb-px text-md font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="pay-tab"
                  data-tabs-target="#pay"
                  type="button"
                  role="tab"
                  aria-controls="pay"
                  aria-selected="true"
                >
                  Make Payment
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="payments-tab"
                  data-tabs-target="#payments"
                  type="button"
                  role="tab"
                  aria-controls="payments"
                  aria-selected="false"
                >
                  Payment History
                </button>
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-200"
              id="pay"
              role="tabpanel"
              aria-labelledby="pay-tab"
            >
              <Pay />
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-200"
              id="payments"
              role="tabpanel"
              aria-labelledby="payments-tab"
            >
              <PaymentHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
