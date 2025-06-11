"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Shorten() {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [gen, setgen] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgen(`${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            }
            )
            .catch((error) => console.error(error));
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-extrabold tracking-wide mb-6 text-center">
                Shorten Your Link
            </h1>


            <div className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    value={url}
                    placeholder="Enter URL"
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        seturl(e.target.value)
                    }}
                />

                <input
                    type="text"
                    value={shorturl}
                    placeholder="Enter Custom Short URL"
                    className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        setshorturl(e.target.value)
                    }}
                />

                <button onClick={generate}
                    className="w-full bg-blue-500 hover:bg-blue-400 transition py-3 text-lg font-medium rounded-md shadow-lg"
                >
                    Generate
                </button>
            </div>
            {gen && (
                <div className="mt-6 bg-gray-800 px-6 py-4 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold text-blue-400 break-all">
                        Your shortened link:
                        <Link href={gen} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {gen}
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}