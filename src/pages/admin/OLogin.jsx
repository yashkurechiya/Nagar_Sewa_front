import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

export default function OLogin() {
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
      console.log(api);

      const res = await api.post("/api/users/login", form);
      console.log(res);

      // Save token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));   

      

      // Redirect based on role
      if (res.data.user.role === "authority") {
        navigate("/officer");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">


      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white border-t-4 border-blue-900 shadow-2xl rounded-sm p-10 space-y-6"
      >
        {/* Institutional Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4 border border-slate-300">
            <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.5 0ac0 5.991-4.49 11.188-10.5 12.57a12.57 12.57 0 01-10.5-12.57c0-1.1.09-2.167.272-3.206" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">Official Access Portal</h2>
          <p className="text-slate-500 mt-2 text-xs font-mono uppercase tracking-widest">Department Information Systems</p>
        </div>

        {/* Credentials Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service ID / Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="officer.name@department.gov"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Access Key</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
              placeholder="••••••••••••"
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-amber-50 border-l-2 border-amber-500 p-3">
          <p className="text-[10px] leading-relaxed text-amber-800 italic">
            <strong>NOTICE:</strong> Unauthorized access to this system is prohibited by law.
            All activity is logged and monitored.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-blue-950 active:bg-black transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure Login
        </button>

        {/* Footer Link */}
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-500 uppercase font-semibold">
          <span className="cursor-pointer hover:text-blue-700 transition" onClick={() => navigate('/forgot-password')}>Forgot Access Key?</span>
          <span className="text-slate-300">|</span>
          <span className="cursor-pointer hover:text-blue-700 transition" onClick={() => navigate('/register/officer')}>Request Credentials</span>
        </div>
      </form>
    </div>
  );
}
