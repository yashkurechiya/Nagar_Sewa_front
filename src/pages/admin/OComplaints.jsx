import React, { use, useEffect, useState } from 'react'
import api from '../../../api/axios';
import { CiCirclePlus } from "react-icons/ci";
import toast from 'react-hot-toast';

const OComplaints = () => {

    const [data, setData] = useState([])
    const [image, setImage] = useState(null);

    const getCmoplaints = async () => {
        try {
            const response = await api.get('/api/all/')
            setData(response.data.response);
        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    }

    const Marked = async (complaint) => {
        try {
            if (complaint.status === "Pending") {

                await api.post(`/api/indi/${complaint._id}/update`);
                toast.success("Complaint marked as In Progress");
                getCmoplaints();
            } else {
                toast.error("Cannot mark complaint");
            }
        } catch (error) {
            console.error("Error updating complaint status:", error);
        }
    }

    const uploadImage = async (complaint) => {
        try {
            if (!image) {
                toast.error("Please select an image to upload");
                return;
            }   
            if(complaint.status === "Pending") {
                toast.error("Mark complaint In Progress before resolving");
                return;
            }
            if(complaint.status === "Resolved") {
                toast.error("Complaint already resolved");
                return;
            }
            const formData = new FormData();
            formData.append("image", image); // 👈 MUST be "image
            // ✅ Correct way to debug FormData
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
            await api.post(`/api/indi/${complaint._id}/afterImage`, formData);
            toast.success("After image uploaded successfully");
            getCmoplaints();
        } catch (error) {
            console.error("Error uploading after image:", error);
        }
    }

    const reject = async(complaint)=>{
        try {
            await api.delete( `/api/${complaint._id}/rejectComplaint`);
            toast.success("Complaint rejected successfully");
            getCmoplaints();
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getCmoplaints();
    }, [])
    return (
        <div className='min-h-screen   justify-center  items-center w-full  py-5 px-4'>
            <div className="w-full grid grid-cols-2 gap-5  items-center justify-center px-14">

                {/* Complaint Cards */}
                {data?.map((complaint, index) => (
                    <>
                        <div
                            key={complaint._id || index}
                            className="bg-black rounded-2xl justify-center max-w-4xl pb-5 border border-gra-800 shadow shadow-white overflow-hidden   transition-all duration-300 mb-8"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 ">
                                <div>
                                    <div className='flex mb-5 items-center gap-2'>
                                        <img src='https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' className='h-10 w-10 rounded-full bg-red-500' />
                                        <h1 className='font-semibold text-zinc-100'>Username</h1>
                                    </div>
                                    <h2 className="text-xl mb-1 font-semibold text-zinc-100">
                                        {complaint.isAnonymous ? "Anonymous Citizen" : complaint.title}
                                    </h2>
                                    <p className="text-sm text-zinc-100">Ward 20: Sukhliya</p>
                                </div>

                                {/* Status Badge */}
                                <div className='flex flex-col gap-3'>

                                    <span
                                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                                        ${complaint.status === "Resolved"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        ● {complaint.status}
                                    </span>
                                    <button onClick={() => Marked(complaint)} className='text-white bg-green-600 cursor-pointer p-1 rounded-full px-2 hover:bg-green-700'>Marked as Progress</button>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="px-6 py-5">
                                <p className="text-zinc-100 leading-relaxed">
                                    {complaint.aiAnalysis.description}
                                </p>
                            </div>

                            {/* Images */}
                            <div className="px-6 pb-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Before Image */}
                                    <div className="relative">
                                        <img
                                            src={complaint.beforeImage.url || ""}
                                            alt="Before"
                                            className="h-45 w-full rounded-xl bg-zinc-900 object-fit"
                                        />
                                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            Before
                                        </span>
                                    </div>

                                    {/* After Image */}
                                    <div className="relative">
                                        {complaint.afterImage ? (
                                            <div>
                                                <img
                                                    src={complaint.afterImage.url || "DefaultAfterImageURL"}
                                                    alt="After"
                                                    className="h-45 w-full rounded-xl bg-zinc-900 object-fit"
                                                />
                                                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                    After
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-2 border-zinc-500 rounded-md h-full justify-center items-center flex p-6 text-center bg-zinc-900 hover:border-green-500 transition">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    id="image-upload"
                                                    className="hidden"
                                                    onChange={(e) => setImage(e.target.files[0])}
                                                />

                                                <label
                                                    htmlFor="image-upload"
                                                    className="cursor-pointer text-sm font-semibold text-gray-200"
                                                >
                                                    {image ? (
                                                        <span className="font-medium text-indigo-600">
                                                            {image.name}
                                                        </span>
                                                    ) : (
                                                        " Officer will upload after image here"
                                                    )}
                                                </label>
                                            </div>
                                        )}
                                        <button onClick={() => uploadImage(complaint)} className='text-white text-center w-full cursor-pointer hover:bg-green-700 justify-center items-center p-1 px-2 font-semibold rounded-full m-2 bg-green-600 flex'>Upload image</button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Stats */}

                        <button onClick={()=>reject(complaint)} className='text-white p-2 bg-red-600 cursor-pointer rounded m-4 px-3'>Reject</button>
                        </div>

                    </>
                ))}

            </div>

        </div>
    )
}

export default OComplaints
