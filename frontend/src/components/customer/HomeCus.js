import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import FooterCus from "./FooterCus";

export default function HomeCus() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //verifyToken();
    loadProducts();
  }, []);

  const verifyToken = async () => {
    await axios
      .get("http://localhost:8000/verify_token")
      .then((response) => {
        if (response.data.verifyToken) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8000/products");
    setProducts(result.data.products);
  };

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-white-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray">
              We invest in the world’s potential
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <a
              href="/"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more about our app
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index}>
            <div
              className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ margin: "50px", width: "280px" }}
            >
              <a href="/">
                <img
                  className="p-8 rounded-t-lg"
                  src={`http://localhost:8000/uploads/${product.image}`}
                  alt="product_image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.product_name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <a
                    href="/"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to List
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FooterCus />
    </div>
  );
}
