import { useEffect, useState } from 'react'
import api from '../../api/axios'

const ShowComplaints = () => {

    const [data, setData] = useState([]);

    const getComplaints = async () => {
        try {
            const response = await api.get('/api/all/')
            setData(response.data.response);
            console.log(response.data.response);


        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    }

    useEffect(() => {
        getComplaints();
    }, [])

    return (
        <div className='min-h-screen   justify-center  items-center w-full  py-5 px-4'>
            <div className="w-full flex flex-col  items-center justify-center px-14">

                {/* Complaint Cards */}
                {data?.map((complaint, index) => (
                    <>
                        <div
                            key={complaint._id || index}
                            className="bg-black rounded-2xl justify-center max-w-4xl   shadow  overflow-hidden   transition-all duration-300 mb-8"
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
                                <span
                                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
          ${complaint.status === "Resolved"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    ● {complaint.status}
                                </span>
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
                                            <div className="h-45 w-full rounded-xl bg-zinc-900 flex items-center justify-center text-gray-400">
                                                Officer will upload after image here
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Footer Stats */}
                            <div className="px-6 py-4 bg-zinc-800 ">
                                <ul className="flex justify-between text-sm text-zinc-400">
                                    <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                                         <span className="font-semibold text-zinc-100">{complaint.likes || 0}</span> Likes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="font-semibold text-zinc-100">{complaint.views || 0}</span> Views
                                    </li>
                                    <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                                         <span className="font-semibold text-zinc-100">{complaint.comments?.length || 0}</span> Comments
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </>
                ))}

            </div>

        </div>
    )
}

export default ShowComplaints
