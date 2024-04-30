import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PendingPur() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadPendingOrders();
  }, []);

  const loadPendingOrders = async () => {

    //get user
    const sessionUser = await axios.get("http://localhost:8000/get_session_user");
    const userData = sessionUser.data.user;

    const orders = await axios.get(`http://localhost:8000/get_orders/${userData._id}/Pending`);
    const products = await axios.get("http://localhost:8000/products");

    setPendingOrders(orders.data.pendingOrders);
    setProducts(products.data.products);

    //console.log(orders.data.pendingOrders[0].products);
  }

  return (
    <div>
      <div id="accordion-open" data-accordion="open">
        {pendingOrders.map((order, index) => (
          <div key={index}>
            <h2 id={`accordion-open-heading-${index}`}>
              <div
                
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              >
                <span className="flex items-center">
                  Order ID: {order._id} | Date: {order.date_time} | Price: {order.total_price} | Paid Amount: {order.paid_amount} | Pending Amount: {order.total_price - order.paid_amount}
                </span>
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Make Payment
                </button> 
              </div>
            </h2>
            <div>
              {pendingOrders[index].products.map((item, index2) => (
                <div key={index2} className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-300 dark:bg-gray-100">
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={`http://localhost:8000/uploads/${products.find((product) => product._id === item.product_id) ?. image || "N/A"}`}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                        {products.find((product) => product._id === item.product_id) ?. product_name || "N/A"}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                        Price: {products.find((product) => product._id === item.product_id) ?. price || "N/A"}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                        Qty: {item.quantity}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                        Warranty: {products.find((product) => product._id === item.product_id) ?. warranty || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
