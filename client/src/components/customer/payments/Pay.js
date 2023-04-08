import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pay() {
  const { id } = useParams();
  const [Purchase, setPurchase] = useState({
    purchase_id: "",
    product_id: "",
    product_name: "",
    userId: "",
    purchase_amount: "",
    paid_amount: "",
    pending_amount: "",
    status: ""
  });

  const [Payment, setPayment] = useState({
    payment_amount: "",
    installment_state: "",
    remarks: ""
  });

  const paidAmount = Purchase.paid_amount + Payment.payment_amount;
  const pendingAmount = Purchase.pending_amount - Payment.payment_amount;
  let purStatus = "";

  if(paidAmount < Purchase.purchase_amount){
    purStatus = "Pending";
  }
  if(paidAmount == Purchase.purchase_amount){
    purStatus = "Complete";
  }

  //console.log(paidAmount);
  //console.log(pendingAmount);
  //console.log(purStatus);
  

  useEffect(() => {
    loadPurchase();
  }, []);

  const loadPurchase = async () => {
    const result = await axios.get(`http://localhost:8080/Purchase/${id}`);
    setPurchase(result.data);
  };

  const onInputChange = (e) => {
    setPayment({ ...Payment, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formDataPayment = new FormData();
    const formDataPurchase = new FormData();

    formDataPayment.append("payment_amount", Payment.payment_amount);
    formDataPayment.append("installment_state", Payment.installment_state);
    formDataPayment.append("remarks", Payment.remarks);
    formDataPayment.append("product_id", Purchase.product_id);
    formDataPayment.append("product_name", Purchase.product_name);
    formDataPayment.append("purchase_id", Purchase.purchase_id);
    formDataPayment.append("user_id", Purchase.userId);

    formDataPurchase.append("installment_state", Payment.installment_state);
    formDataPurchase.append("paid_amount", paidAmount);
    formDataPurchase.append("pending_amount", pendingAmount);
    formDataPurchase.append("status", purStatus);

    await axios
      .post("http://localhost:8080/NewPayment", formDataPayment)
      .then(() => {
        alert("success");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div style={{ padding: "30px" }}>
      <div className="grid gap-6 mb-6 md:grid-cols-5">
        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={"15000.00"}
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
              value={"7000.00"}
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
              value={Purchase.paid_amount}
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
              value={Purchase.pending_amount}
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
              value={"8000.00"}
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
                htmlFor="purchase_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Purchase ID
              </label>
              <input
                type="number"
                id="purchase_id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                value={Purchase.purchase_id}
                disabled
              />
            </div>
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
                required
                name="payment_amount"
                value={Payment.payment_amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <label
                htmlFor="product_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
              >
                Product Name
              </label>
              <input
                type="number"
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                value={Purchase.product_id}
                disabled
              />
            </div>
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
                required
                name="installment_state"
                value={Payment.installment_state}
                onChange={(e) => onInputChange(e)}
              >
                <option selected>Select Installment State</option>
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
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            required
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
    </div>
  );
}
