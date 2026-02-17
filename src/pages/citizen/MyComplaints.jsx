import { useEffect, useState } from "react";
import api from "../../../api/axios";
import MyBills from "./MyBills";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyComplaints();
  }, []);

  const fetchMyComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/api/myComplaints");

      // const data = await response.json();
      setComplaints(response.data);
    } catch (error) {
      console.error("Failed to fetch complaints", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-700">
        Loading your complaints...
      </div>
    );
  }

  return (
    <div className="w-full h-screen mx-auto p-26 bg-black border text-zinc-100 border-gray-900">
      <h1 className="text-2xl font-semibold mb-4 border-b pb-2">
        My Registered Complaints
      </h1>

      {complaints.length === 0 ? (
        <p className="text-zinc-100">
          No complaints have been registered by you.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 text-sm">
            <thead className="bg-[#343434] text-left">
              <tr>
                <th className="border px-3 py-2">Complaint ID</th>
               
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Filed On</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c) => (
                <tr key={c._id} className="hover:bg-gray-900">
                  <td className="border px-3 py-2 font-mono">
                    {c._id.slice(-6)}
                  </td>
                  
                  <td className="border px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        c.status === "Resolved"
                          ? "bg-green-600"
                          : c.status === "In Progress"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <MyBills />
    </div>
  );
};

export default MyComplaints;
