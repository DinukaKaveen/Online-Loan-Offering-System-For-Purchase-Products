import React from "react";

export default function ViewProduct() {
  return (
    <div style={{ margin: "30px" }}>
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-gray-700">
        Product Details
      </h2>
      <br />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-500"
                style={{ width: "40%" }}
              >
                Product name
              </th>
              <th scope="col" className="px-6 py-3 dark:bg-gray-500">
                Color
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-700 dark:bg-gray-300"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 dark:text-gray-700 dark:bg-gray-100">
                Silver
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-700 dark:bg-gray-300"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4 dark:text-gray-700 dark:bg-gray-100">
                White
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-700 dark:bg-gray-300"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4 dark:text-gray-700 dark:bg-gray-100">
                Black
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-700 dark:bg-gray-300"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4 dark:text-gray-700 dark:bg-gray-100">
                Gray
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-gray-700 dark:bg-gray-300"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4 dark:text-gray-700 dark:bg-gray-100">
                Red
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
