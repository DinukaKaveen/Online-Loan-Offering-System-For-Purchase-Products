import React from "react";
import product1 from "../elements/images/products/product1.png";
import product2 from "../elements/images/products/product2.png";
import product3 from "../elements/images/products/product3.png";

export default function PendingPur() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          style={{ width: "100%" }}
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="w-32 p-4">
                <img src={product1} alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                Apple Watch
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                2
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <a
                  href="/"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                >
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="w-32 p-4">
                <img src={product2} alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                Apple Watch
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                1
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <a
                  href="/"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                >
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-100">
              <td className="w-32 p-4">
                <img src={product3} alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                Apple Watch
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                3
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray">
                $599
              </td>
              <td className="px-6 py-4">
                <a
                  href="/"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-yellow-700 border border-yellow-700 hover:bg-yellow-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </a>
                &nbsp;
                <a
                  href="/"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                >
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-gray-700 dark:bg-gray-300">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">6</th>
              <th className="px-6 py-3">$1800</th>
              <th className="px-6 py-3">
                <a
                  href="/Payments"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Payments&nbsp;&nbsp;
                  <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
