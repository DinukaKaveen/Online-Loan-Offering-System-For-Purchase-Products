import axios from "axios";
import React, { useEffect, useState } from "react";
import Pay from "../payments/Pay";

export default function TopayPur() {
  const [user, setUser] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {

    //get user
    const sessionUser = await axios.get("http://localhost:8000/get_session_user");
    const userData = sessionUser.data.user;
    setUser(userData);

    const cartResult = await axios.get(`http://localhost:8000/get_cart/${userData._id}`);
    const productResult = await axios.get("http://localhost:8000/products");

    const cartItems = cartResult.data.cartItems;
    const products = productResult.data.products;

    // Combine cart details with product details based on product ID
    const combinedData = cartItems.map(cartItem => {
      const product = products.find(product => product._id === cartItem.product_id);
      return { ...cartItem, product };
    });

    setCombinedData(combinedData);
      

    // //extract product ids from cart items
    // const productIds = userCart.map((item) => item.product_id);

    // //fetch product details from product ids
    // const products = await axios.post(
    //   "http://localhost:8000/get_products_by_ids",
    //   { productIds }
    // );
    // setProducts(products.data.products);

    
    // Calculate total quantity and total price
    let quantityTotal = 0;
    let priceTotal = 0;

    for (const cartItem of cartItems) {
      quantityTotal += cartItem.quantity;

      for (const product of products) {
        if (cartItem.product_id === product._id) {
          priceTotal += product.price * cartItem.quantity;
        }
      }
    }

    setTotalQuantity(quantityTotal);
    setTotalPrice(priceTotal);
  };


  //--------------------------------------------------------------------------------------------------------
  //Remove Cart Item
  const removeCartItem = async (id, price, qty) => {

    const remove = await axios.delete(`http://localhost:8000/remove-from-cart/${id}`, {
      data: {
        user: user,
        price: price,
        qty: qty
      }
    });

    if(remove.data.success){
      alert(remove.data.message);
      window.location.href = "/purchases";
    }
    else{
      alert(remove.data.message);
    }

  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
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
            {combinedData.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-80 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-250"
              >
                <td className="p-4">
                  <img
                    src={`http://localhost:8000/uploads/${item.product.image}`}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="product_image"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                  {item.product.product_name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-200 dark:hover:border-gray-400 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-80 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={item.quantity}
                        onChange={(e) => {}}
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-200 dark:hover:border-gray-400 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                  {item.product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <a
                    onClick={() => removeCartItem(item._id, item.product.price, item.quantity)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">{totalQuantity}</td>
              <td className="px-6 py-3">{totalPrice.toFixed(2)}</td>
              <td className="px-6 py-3">
                <button
                  data-modal-target="extralarge-modal"
                  data-modal-toggle="extralarge-modal"
                  type="button"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Make Payment
                  </span>
                </button>

                <div
                  id="extralarge-modal"
                  tabIndex="-1"
                  className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative w-full max-w-5xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-20">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-900">
                          Payment Form
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="extralarge-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>

                      <Pay />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
