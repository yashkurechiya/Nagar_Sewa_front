import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-25 bg-[#000000] text-gray-200">

      {/* Header */}
      

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6  py-10  bg-[#000000] border border-gray-700 rounded shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-8 border-b border-gray-600 pb-3 text-white">
          Help & Support
        </h2>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-3">
            Contact Information
          </h3>
          <p className="text-gray-300 mb-2">
            📞 Helpline Number: +91-1800-123-4567
          </p>
          <p className="text-gray-300 mb-2">
            📧 Email: support@enagarseva.gov.in
          </p>
          <p className="text-gray-300">
            🕒 Working Hours: Monday – Friday (10:00 AM – 5:00 PM)
          </p>
        </div>

        {/* Raise Support Ticket */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-4">
            Raise a Support Ticket
          </h3>

          <form className="space-y-4">

            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                className="w-full bg-[#0f172a] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full bg-[#0f172a] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Issue Type</label>
              <select className="w-full bg-[#0f172a] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500">
                <option>Complaint Tracking Issue</option>
                <option>Payment Issue</option>
                <option>Login Problem</option>
                <option>Technical Error</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Description</label>
              <textarea
                rows="4"
                className="w-full bg-[#0f172a] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Describe your issue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
            >
              Submit Ticket
            </button>

          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 border-b border-gray-600 pb-2 mb-4">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-white">
                How can I track my complaint?
              </h4>
              <p>
                You can track complaint status through the dashboard under
                “My Complaints” section.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                How do I download my payment receipt?
              </h4>
              <p>
                Navigate to your profile and open payment history to download
                your receipt.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                What should I do if payment fails?
              </h4>
              <p>
                If payment fails but amount is deducted, please contact support
                with your payment ID for verification.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 mt-8 border-t border-gray-600 text-sm text-gray-400">
          <p>© 2026 E-Nagarseva Help Desk.</p>
          <p>Developed as a Civic-Tech Portfolio System.</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
