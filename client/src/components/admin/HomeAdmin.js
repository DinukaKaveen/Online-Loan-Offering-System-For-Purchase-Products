import React from "react";
import Orders from "./Orders";
import Purchases from "./Purchases";
import Transactions from "./Transactions";

export default function HomeAdmin() {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol>
              <li aria-current="page">
                <div className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Dashboard
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Dashboard
          </h2>

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
                  id="transactions-tab"
                  data-tabs-target="#transactions"
                  type="button"
                  role="tab"
                  aria-controls="transactions"
                  aria-selected="true"
                >
                  Transactions
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="purchases-tab"
                  data-tabs-target="#purchases"
                  type="button"
                  role="tab"
                  aria-controls="purchases"
                  aria-selected="false"
                >
                  Purchases
                </button>
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <div
              className="hidden p-4 rounded-lg"
              id="transactions"
              role="tabpanel"
              aria-labelledby="transactions-tab"
            >
              <Transactions />
            </div>
            <div
              className="hidden p-4 rounded-lg"
              id="purchases"
              role="tabpanel"
              aria-labelledby="purchases-tab"
            >
              <Purchases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
