export function Footer(){

    return(
        
        //footer
        <footer className="border-t border-stone-200 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-2 px-4 py-8 text-sm text-stone-500 sm:flex-row sm:justify-between">
                <p>lOGO</p>
                <p>Your premier destination for the latest fashion trends and timeless classics.</p>
                <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-700">Shipping</a>
                <a href="#" className="hover:text-emerald-700">Returns</a>
                <a href="#" className="hover:text-emerald-700">Contact</a>
                </div>
            </div>
        </footer>
        
    )
}