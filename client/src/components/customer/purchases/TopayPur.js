import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function TopayPur() {
  const logging_id = sessionStorage.getItem("user_id");
  const [UnpaidProducts, setUnpaidProducts] = useState([]);

  useEffect(() => {
    loadUnpaidProducts();
  }, []);

  const loadUnpaidProducts = async () => {
    const result = await axios.get(`http://localhost:8000/Purchase/${logging_id}/Unpaid`);
    setUnpaidProducts(result.data);
  };

  const columns = [
    {
      name: "Purchase ID",
      selector: (row) => row.purchase_id,
      sortable: true,
    },
    {
      name: "Product ID",
      selector: (row) => row.product_id,
      sortable: true,
    },
    {
      name: "Qty",
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.purchase_amount,
      sortable: true,
    },
    {
      name: "Action",
      width: "320px",
      selector: (row) => (
        <div>
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-eye"></i>&nbsp;View
          </button>
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <i className="fa-solid fa-xmark"></i>&nbsp;Cancel
          </button>
          <a
            href={`/Payments/${row.purchase_id}`}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Pay&nbsp;&nbsp;
            <i className="fa-sharp fa-solid fa-angle-right"></i>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={UnpaidProducts}
        //fixedHeader
        responsive
        highlightOnHover
        pagination
        subHeader
      ></DataTable>
    </div>
  );
}
