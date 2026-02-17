import React, { useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const ElectricityBill = ({ type, working, color }) => {
  const [bill, setBill] = useState({
    taxId: "",
    amount: 1,
  });

  const handleEnroll = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (!user) {
        toast.error("Please login first");
        return;
      }

      const userData = JSON.parse(user);
      const role = userData?.role;

      if (role !== "user") {
        toast.error("Only users can enroll in tournaments");
        return;
      }

      if (!token) {
        toast.error("Please log in to enroll");
        return;
      }

      if (!bill?.amount || bill.amount <= 0) {
        toast.error("Invalid bill amount");
        return;
      }

      if (!bill?.taxId) {
        toast.error("Please enter Service Connection ID (SCNO)");
        return;
      }

      // Razorpay script check
      if (!window.Razorpay) {
        toast.error("Razorpay SDK not loaded. Please refresh.");
        return;
      }

      // 1) Create order from backend
      const res = await api.post(
        "/api/payment/create-order",
        {
          amount: bill.amount,
          taxId: bill.taxId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const order = res.data;

      // 2) Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Bill Payment",
        description: "Electricity Bill Payment",
        order_id: order.id,

        handler: async function (response) {
          await verifyPayment(response);
        },

        theme: {
          color: "#000000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Start Error:", error);
      toast.error("Unable to start payment");
    }
  };

  const verifyPayment = async (paymentData) => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/api/payment/verify",
        {
          razorpay_order_id: paymentData.razorpay_order_id,
          razorpay_payment_id: paymentData.razorpay_payment_id,
          razorpay_signature: paymentData.razorpay_signature,
          taxId: bill?.taxId,
          units: bill?.unit,
          amount: bill?.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Payment verified successfully ✅");
    } catch (error) {
      const message =
        error.response?.data?.message || "Payment verification failed";

      console.error("Payment Verification Error:", message);
      toast.error(message);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center p-6">
      <div className="border p-5 rounded-lg border-gray-600 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-yellow-500 text-3xl font-bold mb-6">
          Pay {type} Bill{" "}
          <span className={`text-sm text-${color}-500`}>{working}</span>
        </h1>

        <form className="grid grid-cols-1 w-120 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 border-l-4 border-yellow-500 pl-3 mb-2">
            <h3 className="font-bold text-gray-400">
              Electricity Bill Details
            </h3>
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-semibold text-gray-100">
              Service Connection ID (SCNO)
            </label>
            <input
              type="text"
              value={bill.taxId}
              onChange={(e) =>
                setBill((prev) => ({ ...prev, taxId: e.target.value }))
              }
              className="border p-2.5 rounded bg-gray-50 outline-yellow-500"
              placeholder="Enter SCNO"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-100">
              Units Consumed (kWh)
            </label>
             <input
              type="text"
              value={bill.unit}
              onChange={(e) =>
                setBill((prev) => ({ ...prev, unit: e.target.value }))
              }
              className="border p-2.5 rounded bg-gray-50 outline-yellow-500"
              placeholder="Enter Units"
            />
            
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-100">
              Amount (₹)
            </label>
            <input
              type="number"
              value={bill.amount}
              onChange={(e) =>
                setBill((prev) => ({ ...prev, amount: Number(e.target.value) }))
              }
              className="border p-2.5 rounded bg-gray-50 outline-yellow-500"
              placeholder="Enter amount"
            />
          </div>

          <button
            onClick={handleEnroll}
            className="md:col-span-2 bg-yellow-600 text-white font-bold py-3 rounded hover:bg-yellow-700 shadow-lg"
          >
            PAY {type.toUpperCase()} BILL
          </button>
        </form>
      </div>
    </div>
  );
};

export default ElectricityBill;

function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500">{label}</label>
      <p className="mt-1 text-gray-900 font-medium">{value}</p>
    </div>
  );
}
