import React from "react";

export default function PaymentHistory() {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-700">
          <thead className="text-sm text-gray-900 uppercase dark:text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Payment ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date (D:M:Y)
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Amount 
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700"
              >
                #209688
              </th>
              <td className="px-6 py-4">14/02/2023</td>
              <td className="px-6 py-4">17:23:55</td>
              <td className="px-6 py-4">Credit/Debit</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700"
              >
                #209689
              </th>
              <td className="px-6 py-4">17/02/2023</td>
              <td className="px-6 py-4">7:21:44</td>
              <td className="px-6 py-4">Credit/Debit</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700"
              >
                #209687
              </th>
              <td className="px-6 py-4">10/01/2023</td>
              <td className="px-6 py-4">10:27:25</td>
              <td className="px-6 py-4">Credit/Debit</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-gray-700">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">21,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
