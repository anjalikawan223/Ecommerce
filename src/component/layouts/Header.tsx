export function Header(){

    return(

        <header className="sticky top-0 z-10 bg-white border-b border-stone-200">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                    <a href="#" className="text-xl font-bold text-emerald-700">logo</a>
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-emerald-700">New arrivals</a>
                    <a href="#" className="hover:text-emerald-700">Home</a>
                    <a href="#" className="hover:text-emerald-700">Shop</a>
                    </nav>
                    <div className="flex items-center gap-4">
                    <input type="search" placeholder="Search products" className="hidden sm:block w-48 rounded-full border border-stone-300 px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
                    <a href="#" className="relative text-sm font-medium">Cart
                        <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-xs text-white">2</span>
                    </a>
                    </div>
                </div>
            </header>
    )
}