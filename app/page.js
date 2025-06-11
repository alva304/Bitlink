import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          Shorten & Share Links Instantly
        </h1>

        <p className="text-lg text-gray-300 max-w-xl text-center">
          BitLinks helps you create short, trackable links effortlessly. Share smarter, analyze better, and simplify your digital presence.
        </p>

        <Link
          href="/shorten"
          className="mt-6 px-6 py-3 text-lg font-medium bg-blue-500 hover:bg-blue-400 transition rounded-md shadow-lg"
        >
          Try Now
        </Link>
      </main>

    </div>
  );
}
