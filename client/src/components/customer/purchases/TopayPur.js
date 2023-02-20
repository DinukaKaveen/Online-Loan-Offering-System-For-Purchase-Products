import React from "react";
import product1 from "../elements/images/products/product1.png";
import product2 from "../elements/images/products/product2.png";
import product3 from "../elements/images/products/product3.png";
import $ from "jquery";

export default function TopayPur() {
  
  $(document).ready(function () {
    $(".btn-open-modal").click(function () {
      var name = $(this).data("name");
      var age = $(this).data("age");
      $("#name").val(name);
      $("#age").val(age);
    });
  });

  // function openPopup() {
  //   // Set the dimensions of the popup window
  //   var width = 1000;
  //   var height = 600;

  //   // Calculate the position of the popup window to center it on the screen
  //   var left = (window.innerWidth - width) / 2;
  //   var top = (window.innerHeight - height) / 2;

  //   // Open the popup window
  //   window.open(
  //     "/ViewProduct",
  //     "popup",
  //     "width=" +
  //       width +
  //       ", height=" +
  //       height +
  //       ", left=" +
  //       left +
  //       ", top=" +
  //       top
  //   );
  // }

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
                <button
                  type="button"
                  data-modal-target="defaultModal"
                  data-modal-toggle="defaultModal"
                  data-name="dinuka"
                  data-age="30"
                  //onClick={openPopup}
                  className="btn-open-modal text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  <i className="fa-solid fa-eye"></i>&nbsp;View
                </button>
                <button
                  type="button"
                  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <i className="fa-solid fa-xmark"></i>&nbsp;Cancel
                </button>
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
                  Pay&nbsp;&nbsp;
                  <i className="fa-sharp fa-solid fa-angle-right"></i>
                </a>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="modal fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div class="relative w-full h-full max-w-2xl md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <input type="text" id="name" />
              <input type="text" id="age" />
            </div>

            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
