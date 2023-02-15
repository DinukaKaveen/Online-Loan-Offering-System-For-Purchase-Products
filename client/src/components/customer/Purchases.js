import React from "react";
import { Link } from "react-router-dom";
import product1 from "../elements/images/products/product1.png";
import product2 from "../elements/images/products/product2.png";
import product3 from "../elements/images/products/product3.png";
import FooterCus from "./FooterCus";
import NavbarCus from "./NavbarCus";

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
              </Link>
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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
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
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
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
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
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
                    href="/"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Payments
                  </a>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <FooterCus />
    </div>
  );
}
