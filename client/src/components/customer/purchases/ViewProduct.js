import React from "react";

export default function ViewProduct() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{margin: '50px'}}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                style={{ width: "40%" }}
              >
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
