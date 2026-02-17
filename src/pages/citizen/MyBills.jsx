import React, { useEffect, useState } from 'react'
import api from '../../../api/axios';

const MyBills = () => {

    const [bill, setBill] = useState([]);

    const getBills = async () => {
        try {
            const response = await api.get('/api/users/paytax');
            console.log(response.data.response);
            setBill(response.data.response)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getBills();
    }, [])

    return (
       <div className="w-full max-w-4xl justify-start flex flex-col    py-10">
  {/* Header */}
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-semibold text-gray-100">Bills</h2>
    <p className="text-sm text-gray-100">
      Total: <span className="font-semibold">{bill?.length || 0}</span>
    </p>
  </div>

  {/* Empty State */}
  {!bill || bill.length === 0 ? (
    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
      <p className="text-lg font-semibold text-gray-100">No bills found</p>
      <p className="text-gray-500 mt-2">
        Once you pay a bill, it will appear here.
      </p>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {bill.map((bils, index) => (
        <div
          key={bils._id || index}
          className="bg-zinc-800 border border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          {/* Top */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-200">Service Connection ID</p>
              <p className="text-lg font-bold text-gray-100">{bils.taxId}</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-200">Amount</p>
              <p className="text-xl font-extrabold text-green-600">
                ₹ {bils.amount}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100 my-5" />

          {/* Details */}
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-200">Payment ID</span>
              <span className="font-medium text-gray-100">
                {bils.paymentId || "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-200">Receipt No.</span>
              <span className="font-medium text-gray-100">
                {bils.receiptNumber || "—"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-200">Units</span>
              <span className="font-medium text-gray-100">
                {bils.units || "—"} kWh
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    )
}

export default MyBills
