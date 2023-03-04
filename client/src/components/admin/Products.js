import React from "react";
import DataTable from "react-data-table-component";

export default function Products() {
  const columns = [
    {
      name: "Payment ID",
      selector: (row) => row.payment_id,
      sortable: true,
    },
    {
      name: "Order ID",
      selector: (row) => row.order_id,
      sortable: true,
    },
    {
      name: "User ID",
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Date/Time",
      selector: (row) => row.date_time,
      sortable: true,
    },
    {
      name: "Payment State",
      selector: (row) => row.payment_state,
      sortable: true,
    },
    {
      name: "Payment Type",
      selector: (row) => row.payment_type,
      sortable: true,
    },
  ];

  const data = [
    {
      payment_id: 1,
      order_id: 12,
      user_id: 25,
      amount: 25000,
      date_time: "03-03-2023",
      payment_state: "Complete",
      payment_type: "Credit/Debit",
    },
  ];

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/admin"
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
                </a>
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
                    Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Products Details
          </h2>
          <br />

          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-100 mr-2 mb-2 border border-gray-200 dark:border-gray-400"
          >
            <i className="fa-solid fa-plus"></i>&nbsp;ADD NEW PRODUCT
          </button>

          <DataTable
            columns={columns}
            data={data}
            fixedHeader
            responsive
            highlightOnHover
            pagination
            subHeader
            subHeaderComponent={
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-300 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            }
          ></DataTable>
        </div>
      </div>
    </div>
  );
}
