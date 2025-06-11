"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-6 flex justify-between h-16 items-center">

                    <Link href="/">
                        <span className="text-2xl font-bold cursor-pointer">BitLinks</span>
                    </Link>

                    <div className="flex space-x-6 items-center">
                        <Link href="/about" className={`hover:text-blue-400 transition ${pathname === "/about" ? "text-blue-400" : ""} `}>About</Link>
                        <Link href="/contact" className={`hover:text-blue-400 transition ${pathname === "/contact" ? "text-blue-400" : ""}`}>
                            Contact us
                        </Link>
                        <Link href="/shorten" className={`hover:text-blue-400 transition ${pathname === "/shorten" ? "text-blue-400" : ""}`}>
                            Shorten
                        </Link>
                        {/* <Link href="/github" className={`hover:text-blue-400 transition ${pathname === "/github" ? "text-blue-400" : ""}`}>
                            Github
                        </Link> */}
                        <Link href="/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition">
                                GitHub
                            </button>
                        </Link>



                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
