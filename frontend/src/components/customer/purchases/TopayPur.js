import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TopayPur() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    //get user
    const sessionUser = await axios.get("http://localhost:8000/get_session_user");
    const userId = sessionUser.data.user._id;
    setUser(sessionUser.data.user);

    //get cart items
    const result = await axios.get(`http://localhost:8000/get_cart/${userId}`);
    const userCart = result.data.cartItems;
    setCartItems(result.data.cartItems);

    //extract product ids from cart items
    const productIds = userCart.map((item) => item.product_id);

    //fetch product details from product ids
    const products = await axios.post("http://localhost:8000/get_products_by_ids",{ productIds });
    setProducts(products.data.products);

    // Calculate total quantity and total price
    let quantityTotal = 0;
    let priceTotal = 0;

    for (const cartItem of result.data.cartItems) {
      quantityTotal += cartItem.quantity;
      
      for (const product of products.data.products) {
        if (cartItem.product_id === product._id) {
          priceTotal += product.price * cartItem.quantity;
        }
      }
    }

    setTotalQuantity(quantityTotal);
    setTotalPrice(priceTotal);
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
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
            {products.map((product, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={`http://localhost:8000/uploads/${product.image}`}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="product_image"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.product_name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={cartItems[index].quantity}
                        onChange={(e) => {}}
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.price}
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
            ))}
          </tbody>
          <tfoot>
            <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">{totalQuantity}</td>
              <td className="px-6 py-3">{totalPrice.toFixed(2)}</td>
              <td className="px-6 py-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
