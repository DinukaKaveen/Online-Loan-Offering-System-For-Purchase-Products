import React from "react";

export default function Pay() {
  return (
    <div>
      <div
        className="grid gap-6 mb-6 md:grid-cols-2"
        style={{ padding: "30px" }}
      >
        <div>
          <div className="flex">
            <span
              className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600"
              style={{ width: "110px" }}
            >
              Total Loan
            </span>
            <input
              type="text"
              value={"15000.00"}
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <br />
          <div className="flex">
            <span
              className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600"
              style={{ width: "110px" }}
            >
              Total Loan
            </span>
            <input
              type="text"
              value={"15000.00"}
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <br />
          <div className="flex">
            <span
              className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600"
              style={{ width: "110px" }}
            >
              Total Loan
            </span>
            <input
              type="text"
              value={"15000.00"}
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
        </div>

        <div>
          <form>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <i className="fa-solid fa-credit-card"></i>&nbsp; Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
