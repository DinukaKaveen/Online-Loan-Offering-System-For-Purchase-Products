import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function TopayPur() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
    loadCartItems();
  }, []);

  const getUser = async () => {
    const result = await axios.get("http://localhost:8000/get_session_user");
    setUser(result.data.user);
  };

  const loadCartItems = async () => {
    const result = await axios.get(`http://localhost:8000/get_cart/${user._id}`);
    setCartItems(result.data.cartItems);

    //extract product ids from cart items
    const productIds = cartItems.map((item) => item.product_id);

    //fetch product details from product ids
    const products = await axios.post("http://localhost:8000/get_products_by_ids", { productIds } );
    setProducts(products.data.products);
  }; 

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Action",
      width: "320px",
      selector: (row) => (
        <div>
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
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={products}
        //fixedHeader
        responsive
        highlightOnHover
        pagination
        subHeader
      ></DataTable>
    </div>
  );
}
