import { Link } from "react-router-dom";

export function ShoppingCart(){
    
    return(
        <>
        <section className="flex-grow">
            <div className="min-h-screen bg-white p-4 md:p-6 text-black">
                <div className="max-w-250 mx-auto">
                    <h1 className="font-bold text-3xl mb-8 md:mb-12">Shopping Cart</h1>
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="w-full bg-white p-4 sm:p-6 mb-6 border border-gray-200 rounded-2xl sm:rounded-3xl">
                            <div className="items-center md:flex text-sm font-semibold pb-4 border-b border-gray-200 hidden">
                                <span className="flex-1">Product Code</span>
                                <span className="w-[120px] text-center">Quantity</span>
                                <span className="w-[80px] text-center">Total</span>
                                <span className="w-[40px] text-center">Action</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center py-6 border-b border-gray-100 last:border-b-0 gap-4">
                                    <div className="flex item-center gap-4 flex-1 min-w-0">
                                        <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-gray-900">Furniture Set</h3>
                                            <p className="text-sm text-gray-900">Set: colour: coffee</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center min-w-[120px] h-8 border border-gray-400 rounded-full px-1 justify-center">
                                        <button className="w-10 text-gray-600 p-1
                                         hover:text-black transition-colors cursor-pointer disabled:opacity-50 ">-</button>
                                        <span className="text-gray-600 font-medium text-sm w-6">1</span>
                                        <button className="text-gray-600 p-1 hover:text-black transition-colors cursor-pointer">+</button>
                                    </div>
                                    <div className="text-center font-semibold text-gray-600 min-w-[80px] ">$437</div>
                                    <div className="min-w-[40px] flex justify-end">
                                        <button className="text-gray-400 p-2 hover:text-red-500 transition-colors rounded-full cursor-pointer hover:bg-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="w-5 h-5"
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 7h16"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 7l1 13h10l1-13"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    d="M10 11v5M14 11v5"
                                                />
                                            </svg>
                                        </button>
                                    </div>                                                                      
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center py-6 border-b border-gray-100 last:border-b-0 gap-4">
                                    <div className="flex item-center gap-4 flex-1 min-w-0">
                                        <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-gray-800">Vintage Dining Set</h3>
                                            <p className="text-sm text-gray-900">Set: colour: Brown</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center min-w-[120px] h-8 border border-gray-400 rounded-full px-1 justify-center">
                                        <button className="w-10 text-gray-600 p-1
                                         hover:text-black transition-colors cursor-pointer disabled:opacity-50 ">-</button>
                                        <span className="text-gray-600 font-medium text-sm w-6">2</span>
                                        <button className="text-gray-600 p-1 hover:text-black transition-colors cursor-pointer">+</button>
                                    </div>
                                    <div className="text-center font-semibold text-gray-600 min-w-[80px] ">$945</div>
                                    <div className="min-w-[40px] flex justify-end">
                                        <button className="text-gray-400 p-2 hover:text-red-500 transition-colors rounded-full cursor-pointer hover:bg-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="w-5 h-5"
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 7h16"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 7l1 13h10l1-13"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    d="M10 11v5M14 11v5"
                                                />
                                            </svg>
                                        </button>
                                    </div>                                                                      
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center py-6 border-b border-gray-100 last:border-b-0 gap-4">
                                    <div className="flex item-center gap-4 flex-1 min-w-0">
                                        <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-gray-800 truncate">Studio Chair</h3>
                                            <p className="text-sm text-gray-900 truncate">Set: colour: Deep Green</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center min-w-[120px] h-8 border border-gray-400 rounded-full px-1 justify-center">
                                        <button className="text-gray-600 p-1
                                         hover:text-black transition-colors cursor-pointer disabled:opacity-50 w-10">-</button>
                                        <span className="text-gray-600 font-medium text-sm w-6">3</span>
                                        <button className="text-gray-600 p-1 hover:text-black transition-colors cursor-pointer">+</button>
                                    </div>
                                    <div className="text-center font-semibold text-gray-600 min-w-[80px] ">$597</div>
                                    <div className="min-w-[40px] flex justify-end">
                                        <button className="text-gray-400 p-2 hover:text-red-500 transition-colors rounded-full cursor-pointer hover:bg-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="w-5 h-5"
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 7h16"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 7l1 13h10l1-13"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    d="M10 11v5M14 11v5"
                                                />
                                            </svg>
                                        </button>
                                    </div>                                                                      
                                </div>
                            </div>
                        </div>
                        <div className="w-fll lg:w-[380px] shrink-0 sticky top-8">
                            <div className="p-6 bg-white border border-gray-200 rounded-3xl flex flex-col has-first:">
                                <h2 className="text-gray-800 mb-6 font-semibold text-lg">Order Summary</h2>
                                <div className="flex gap-2 mb-8">
                                    <input className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500" type="text" placeholder="Discount Voucher"/>
                                    <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">Apply</button>
                                </div>
                                <div className="space-y-4 mb-8 flex-1">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">Sub Total</span>
                                        <span className="font-semibold text-gray-900">1979 USD</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">Discount(10%)</span>
                                        <span className="font-semibold text-gray-900">-198 USD</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">Delivery fee</span>
                                        <span className="font-semibold text-gray-900">50.00 USD</span>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-gray-600 font-medium">Total</span>
                                        <span className="text-xl font-bold text-gray-900">$1831 USD</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-6 bg-gray-50/50 p-3 rounded-xl text-xs text-gray-600">
                                        <div className="shrink-0 mt-0.5 text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="pointer-events-none select-none"
                                            aria-hidden="true">
                                            <path d="M12 3L20 7V12C20 17 16.5 20 12 22C7.5 20 4 17 4 12V7L12 3Z" fill="none" stroke="currentColor" strokeLinejoin="round"/>
                                            <path d="M8 12L10.5 14.5L16 9" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        </div>
                                        <p>90 Day Limited Warranty against manufacturer's defects <Link to="" className="font-semibold underline decoration-gray-300 hover:text-black">Details</Link></p>
                                    </div>
                                    <button className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors cursor-pointer">Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}