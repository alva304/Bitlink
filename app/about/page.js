export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center animate-fade-in">
        About BitLinks
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl text-center animate-slide-up">
        BitLinks is a modern URL shortener designed to keep links sleek and effortless to use. Easily create short, custom links and share them anywhere.
      </p>

      {/* Features Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold">🔗 Shorten Links</h3>
          <p className="text-gray-400 mt-2">Quickly create custom, trackable short URLs.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold">⚡ Fast & Simple</h3>
          <p className="text-gray-400 mt-2">Generate links in seconds with minimal effort.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition">
          <h3 className="text-xl font-semibold">🚀 Share Easily</h3>
          <p className="text-gray-400 mt-2">Use short links anywhere for a clean, professional look.</p>
        </div>
      </div>
    </div>
  );
}