import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){
    const[isMenuOpen,setIsMenuOpen]=useState(false)

    return(

        <header className="sticky top-0 z-10 bg-white border-b border-stone-200">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                    <Link to="/" className="text-xl font-bold text-black">VOGUE.</Link>
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-black">New Arrivals</a>
                        <Link to="/" className="hover:text-emerald-700">Home</Link>
                        <Link to="/search" className="hover:text-emerald-700">Shop</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link to={`/search`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" mstroke-linejoin="round" d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/>
                        </svg>
                        </Link>
                        <Link to="/shoppingcart" className="relative text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l1 13H5L6 8Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8a3 3 0 0 1 6 0"/>
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center">3</span>
                        </Link>
                        <Link to="/login" className="relative text-sm/8 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="8" r="3.5" />
                                <path strokeLinecap="round" d="M5 21a7 7 0 0 1 14 0"/>
                            </svg>
                        </Link>
                    </div>
                    {/* Mobile hamburger button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-2xl relative z-50 ${isMenuOpen ? text-white:text-black}"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                    {isMenuOpen && (
                        <div className="md:hidden fixed inset-0 bg-gray-500 flex flex-col items-center justify-center gap-2 ">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-white text-2xl font-bold py-2">
                                New Arrivals
                            </Link>

                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-white text-2xl font-bold py-2 ">
                                Home
                            </Link>

                            <Link to="/search" onClick={() => setIsMenuOpen(false)} className="w-full text-center text-white text-2xl font-bold py-2 hover:bg-red-400">
                                Shop
                            </Link>
                        </div>
                    )}
                </div>
            </header>
    )
}