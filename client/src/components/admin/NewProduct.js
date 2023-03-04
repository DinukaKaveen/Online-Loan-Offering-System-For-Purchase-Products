import axios from "axios";
import React, { useState } from "react";

export default function NewProduct() {
  const [product, setproduct] = useState({
    product_code: "",
    product_name: "",
    price: "",
    qty: "",
    main_category: "",
    sub_category: "",
    warranty: "",
    supplier_id: "",
    status: "",
  });

  const {
    product_code,
    product_name,
    price,
    qty,
    main_category,
    sub_category,
    warranty,
    supplier_id,
    status,
  } = product;

  const onInputChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/RegisterCustomer", product);
  };

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
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="/admin/Products"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-gray"
                  >
                    Products
                  </a>
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
                    Add New Product
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
            Add New Product
          </h2>
          <br />

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="product_code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Product Code
                </label>
                <input
                  type="text"
                  id="product_code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="product_code"
                  value={product_code}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="product_name"
                  value={product_name}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                  for="file_input"
                >
                  Upload Product Image
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-gray-600"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="qty"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Qty
                </label>
                <input
                  type="number"
                  id="qty"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="qty"
                  value={qty}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="main_category"
                  className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                >
                  Main Category
                </label>
                <select
                  id="main_category"
                  name="main_category"
                  value={main_category}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="sub_category"
                  className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                >
                  Sub Category
                </label>
                <select
                  id="sub_category"
                  name="sub_category"
                  value={sub_category}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="warranty"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Warranty
                </label>
                <input
                  type="text"
                  id="warranty"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="warranty"
                  value={warranty}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="supplier_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray"
                >
                  Supplier ID
                </label>
                <input
                  type="text"
                  id="supplier_id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="supplier_id"
                  value={supplier_id}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray dark:text-gray"
                >
                  Product Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
