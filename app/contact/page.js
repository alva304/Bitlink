export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-extrabold tracking-wide mb-6 text-center">
                Contact Us
            </h1>
            <div className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-400 transition py-3 text-lg font-medium rounded-md shadow-lg"
                >
                    Send Message
                </button>
            </div>
        </div>
    );
}