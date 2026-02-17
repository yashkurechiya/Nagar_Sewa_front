import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

export default function Login() {
  const navigate = useNavigate();
  const backend = import.meta.env.VITE_BACKEND_URL ?? '';

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      const res = await api.post("/api/users/login", form);

      // Save token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 space-y-6"
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-1 text-sm">Login to your account</p>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="
              w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition
            "
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="
              w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black
              transition
            "
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="
            w-full bg-black text-white py-3 rounded-xl font-semibold
            hover:bg-gray-900 transition cursor-pointer
          "
        >
          Login
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate('/register')}
            className="text-blue-600 cursor-pointer font-medium hover:underline"
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
}
