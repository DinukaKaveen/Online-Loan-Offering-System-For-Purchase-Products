import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pay() {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState([]);

  const [Payment, setPayment] = useState({
    payment_amount: "",
    installment_state: "",
    remarks: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const sessionUser = await axios.get("http://localhost:8000/get_session_user");
    setUser(sessionUser.data.user);
  };

  const onInputChange = (e) => {
    setPayment({ ...Payment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const status = Payment.installment_state === "Full Payment" ? "Complete" : "Pending";

    const cart = await axios.get(`http://localhost:8000/get_cart/${user._id}`);

    await axios
      .post("http://localhost:8000/create_order", {
        products: cart.data.cartItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
        user: user,
        total_price: user.used_amount,
        paid_amount: Payment.payment_amount,
        installment_state: Payment.installment_state,
        remarks: Payment.remarks,
        status: status
      })
      .then((response) => {
        if (response.data.success) {
          setMessage(response.data.message);
        } else {
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <div className="grid gap-6 mb-6 md:grid-cols-5">
        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={String(user.total_amount)}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              disabled
            />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Total Loan
            </label>
          </div>
        </div>

        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={String(user.used_amount)}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              disabled
            />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Used Amount
            </label>
          </div>
        </div>

        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={String(user.paid_amount)}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              disabled
            />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Paid Amount
            </label>
          </div>
        </div>

        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={String(user.used_amount - user.paid_amount)}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              disabled
            />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Pending Amount
            </label>
          </div>
        </div>

        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={String(user.total_amount - user.used_amount)}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              disabled
            />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Loan Balance
            </label>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Amount*
              </label>
              <input
                type="number"
                id="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                name="payment_amount"
                value={Payment.payment_amount}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <label
                htmlFor="installment"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Installment State*
              </label>
              <select
                id="installment"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="installment_state"
                value={Payment.installment_state}
                onChange={(e) => onInputChange(e)}
              >
                <option defaultValue={""}>Select Installment State</option>
                <option value={"1st Installment"}>1st Installment</option>
                <option value={"2nd Installment"}>2nd Installment</option>
                <option value={"3rd Installment"}>3rd Installment</option>
                <option value={"Full Payment"}>Full Payment</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="remarks"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
          >
            Remarks
          </label>
          <textarea
            id="remarks"
            rows="3"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            name="remarks"
            value={Payment.remarks}
            onChange={(e) => onInputChange(e)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <i className="fa-solid fa-credit-card"></i>&nbsp; Pay Now
        </button>
      </form>
      <br></br>
      <p style={{ color: "black" }}>{message}</p>
    </div>
  );
}
