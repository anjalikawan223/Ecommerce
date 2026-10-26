import { Link } from "react-router-dom";
import { Footer } from "../component/layouts/Footer";
import { Header } from "../component/layouts/Header";

export function SignUpPages(){

    return(
        <>
            <section className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
                <div className="w-full max-w-[1050px] min-h-[680px] bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
                    {/* <!-- Form side --> */}
                    <div className="px-6 sm:px-30 lg:px-12 py-24">
                        {/* Title */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-extrabold tracking-tight sm:text-3xl text-center">Welcome Back</h1>
                            <p className="mt-3 text-xl text-mute text-center">Enter your email and password to access your account.  </p>
                        </div>
                        {/* <!-- Form --> */}
                        <form  className="mt-8 space-y-4" >
                            <div>
                                <label className="sr-only">Email address</label>
                                <input id="email" name="email" type="email" required placeholder="Email address"
                                    className="h-[52px] w-full rounded-md border border-line bg-white/40 px-4 placeholder:text-mute focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20" />
                            </div>

                            <div>
                                <div className="relative">
                                    <label className="sr-only">Password</label>
                                    <input id="password" name="password" type="password"  placeholder="Password"
                                        className="h-[52px] w-full rounded-md border border-line bg-white/40 px-4 pr-12 placeholder:text-mute focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20" />
                                    <button type="button" id="toggle-pw" aria-label="Show password" aria-pressed="false"
                                        className="absolute inset-y-0 right-0 grid w-12 place-items-center text-ink/70 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-md">
                                        <svg id="eye-on" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                                        <svg id="eye-off" className="hidden h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.5 6.6C3.7 8.4 2 12 2 12s3.6 7 10 7c1.7 0 3.2-.4 4.5-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
                                    </button>
                                </div>

                                {/* <!-- Strength --> */}
                                <div className="mt-3 flex items-center gap-4">
                                    <input name="terms" type="checkbox" required
                                        className="h-[18px] w-[18px] rounded border-line accent-ink focus:ring-2 focus:ring-ink/30" />
                                    <p className="text-sm">Remember me</p>
                                    <p className="flex-[2] text-xs text-mute text-right">Forget Password?</p>
                                </div>
                            </div>
                            <p id="form-error" className="hidden text-sm text-red-700" role="alert"></p>
                            <button  type="submit" className="mt-4 inline-flex h-14 w-full max-w-[290px] bg-black items-center justify-center gap-3 rounded-full bg-ink px-8 font-medium text-white shadow-lg shadow-ink/20 transition hover:bg-ink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
                                Login </button>
                        </form>

                        <p className="mt-8 text-sm text-mute">
                            Don't have an account? <Link to="/signup" className="underline underline-offset-2 hover:text-ink">Sign up</Link>
                        </p>
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative hidden lg:block min-h-[680px]">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" alt="Fashion" className="absolute inset-0 w-full h-full object-cover"/>
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                </div>
            </section>
        </>
    )
}