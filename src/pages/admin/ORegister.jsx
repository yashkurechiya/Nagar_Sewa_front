import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";

const ORegister = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords do not match");
        }
        console.log("Register payload:", {
  name: formData.name,
  email: formData.email,
  password: formData.password,
  role: formData.role,
});

        try {
            // 1️⃣ Register
            await api.post("/api/users/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: "authority",
            });

            // 2️⃣ Auto-login
            const res = await api.post("/api/users/login", {
                email: formData.email,
                password: formData.password,
            });

            // 3️⃣ Save auth
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
       <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-12 relative overflow-hidden">
  {/* Subtle decorative background shapes */}
  <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl"></div>

  <div className="max-w-xl w-full z-10">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Officer Account Register
      </h1>
      <p className="text-slate-500 mt-2">
        Join the <span className="text-blue-600 font-semibold">e-NagarSeva</span> digital community to control municipal services.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Full Name - Spans 2 columns */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Full Name</label>
          <input
            name="name"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Email Address - Spans 2 columns */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Terms and Conditions (New Element) */}
        <div className="md:col-span-2 flex items-start gap-3 py-2">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <p className="text-xs text-slate-500 leading-tight">
            I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span> regarding my personal data.
          </p>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
          >
            Create Account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="text-center mt-8 pt-6 border-t border-slate-100">
        <p className="text-slate-600">
          Already have an account?{" "}
          <a href="/login/officer" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            Sign In here
          </a>
        </p>
      </div>
    </div>
    
    {/* Help Text */}
    <p className="text-center mt-6 text-slate-400 text-xs uppercase tracking-widest font-medium">
      Secure 256-bit encrypted registration
    </p>
  </div>
</div>
    );
};

export default ORegister;
