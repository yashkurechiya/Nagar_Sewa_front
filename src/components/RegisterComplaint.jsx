import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterComplaint = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !category || !title) {
      return alert("Image, category, and title are required");
    }

    const formData = new FormData();

    // 🔑 MUST MATCH BACKEND
    formData.append("title", `${title} Issue`);
    formData.append("category", category);
    formData.append("image", image); // 👈 MUST be "image"

    // ✅ Correct way to debug FormData
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    console.log(formData);


    try {
      setLoading(true);
      await api.post("/api/complaints", formData);
    toast.success("Complaint created successfully");
    navigate("/");

    } catch (err) {
      console.error(err);
      toast.error("Failed to create complaint");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="p-15 bg-black justify-center items-center flex min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-zinc-950 border max-w-3xl mt-10 border-zinc-800 rounded-xl p-8 shadow-2xl"
      >
        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-300">Title</label>
          <input
            type="text"
            placeholder="Write title ...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-zinc-600"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-zinc-800 rounded-md px-3 py-2 bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
          >
            <option value="" className="bg-zinc-900">Select Category</option>
            <option value="Water" className="bg-zinc-900">Water</option>
            <option value="Electricity" className="bg-zinc-900">Electricity</option>
            <option value="Road" className="bg-zinc-900">Road</option>
            <option value="Garbage" className="bg-zinc-900">Garbage</option>
            <option value="Other" className="bg-zinc-900">Other</option>
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Upload Issue Image
          </label>

          <div className="border-2 border-dashed border-zinc-800 rounded-md p-6 text-center bg-zinc-900/50 hover:border-indigo-500 hover:bg-zinc-900 transition-all group">
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label
              htmlFor="image-upload"
              className="cursor-pointer text-sm text-zinc-400 group-hover:text-zinc-200"
            >
              {image ? (
                <span className="font-medium text-indigo-400">
                  {image.name}
                </span>
              ) : (
                "Click to upload or drag & drop an image"
              )}
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Description
          </label>

          <textarea
            placeholder="Description will auto generate by ML model..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            disabled={true}
            className="w-full border cursor-not-allowed border-zinc-800 rounded-md px-3 py-2 bg-zinc-900 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-semibold py-3 rounded-md transition-all shadow-lg active:scale-[0.98]"
          >
            {loading ? "Submitting Complaint..." : "Submit Complaint"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterComplaint;
