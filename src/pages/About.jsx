import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#000000] py-20 text-gray-900">

      {/* Header */}
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10  bg-[#000000] shadow-lg border border-gray-700 rounded">

        <h2 className="text-3xl font-bold text-center mb-8 border-b border-gray-600 pb-3 text-white">
          About E-Nagarseva
        </h2>

        {/* About Section */}
        <p className="mb-5 leading-relaxed text-justify text-gray-300">
          E-Nagarseva is a ward-level civic-tech platform designed to improve 
          transparency, accountability, and citizen engagement in local governance.
          It enables residents to raise complaints, track development work, 
          monitor ward-level updates, and make digital payments for public services.
        </p>

        <p className="mb-6 leading-relaxed text-justify text-gray-300">
          This platform demonstrates a structured digital governance model 
          where citizens can access official information and interact with 
          local authorities through a centralized system.
        </p>

        {/* Vision */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-3">
            Vision
          </h3>
          <p className="text-gray-300">
            To build a transparent and digitally empowered ward-level governance 
            system for better civic participation and accountability.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-3">
            Key Features
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Ward-level dashboard & filtering</li>
            <li>Complaint registration & tracking system</li>
            <li>Electricity bill payment with receipt generation</li>
            <li>Public project monitoring</li>
            <li>User profile with payment history</li>
          </ul>
        </div>

        {/* Tech Stack Section (NEW) */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-3">
            Technology Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mt-4 text-gray-300">

            <div>
              <h4 className="font-semibold text-white mb-2">Frontend</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>Axios</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Backend</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Security & Payments</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>JWT Authentication</li>
                <li>Razorpay Integration</li>
                <li>Crypto Signature Verification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Deployment</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Netlify (Frontend)</li>
                <li>Node Server Deployment</li>
                <li>Environment Variable Security</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-gray-600 text-sm text-gray-400">
          <p>© 2026 E-Nagarseva Portal. All Rights Reserved.</p>
          <p>Developed as a Civic-Tech Portfolio Project.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
