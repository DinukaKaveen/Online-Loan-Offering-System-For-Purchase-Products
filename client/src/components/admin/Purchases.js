import React from "react";
import DataTable from "react-data-table-component";

export default function Purchases() {
  const columns = [
    {
      name: "Product ID",
      selector: (row) => row.product_id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
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
      name: "Date/Time",
      selector: (row) => row.date_time,
      sortable: true,
    },
    {
      name: "Purchase Status",
      selector: (row) => row.purchase_status,
      sortable: true,
    },
  ];

  const data = [
    {
      product_id: 12,
      product_name: 25,
      order_id: 25000,
      user_id: "03-03-2023",
      date_time: "Complete",
      purchase_status: "Credit/Debit",  
    },
  ];

  return (
    <div>
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
  );
}
