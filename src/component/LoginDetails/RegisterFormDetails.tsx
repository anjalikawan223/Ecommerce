import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";

export function RegisterFormDetails(){
    return(
        <>
        <Header />
            <main className="min-h-screen bg-[#f5f3ed] flex items-center justify-center p-4">
                <div className="w-full max-w-[1050px] min-h-[680px] bg-[#faf9f5] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
                    {/* <!-- Form side --> */}
                    <div className="px-6 sm:px-10 lg:px-12 py-7">
                        <div className="flex items-center max-w-[570px] mb-8">
                            <div className="flex items-center flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full bg-black text-white text-[10px] flex items-center justify-center">1</div>
                                    <span className="text-[12px] font-semibold text-black mt-2 whitespace-nowrap">Your details</span>
                                </div>
                                <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                            </div>
                            <div className="flex items-center flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">2</div>
                                    <span className="text-[12px] text-black mt-2 whitespace-nowrap">Verify email</span>
                                </div>

                                <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                            </div>
                            <div className="flex items-center flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">3</div>
                                    <span className="text-[12px] text-black mt-2 whitespace-nowrap">Your style</span>
                                </div>

                                <div className="h-px bg-gray-400 flex-1 mx-3 mb-5"></div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full border border-gray-600 text-black text-[10px] flex items-center justify-center">4</div>
                                <span className="mt-2 text-[12px] text-black whitespace-nowrap">All set</span>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <p className="text-[10px] font-semibold tracking-[0.15em] text-black">Join the vogue Community</p>
                                <div className="w-8 h-px bg-gray-600"></div>
                            </div>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Create your account</h1>
                            <p className="mt-3 text-xl text-mute">A little style inspiration, made personal.</p>
                        </div>
                        {/* <!-- Form --> */}
                            <form  className="mt-4 space-y-4" >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                    <label  className="sr-only">First name</label>
                                    <input name="first" type="text"  required placeholder="First name"
                                        className="h-[52px] w-full rounded-md border border-line bg-white/40 px-4 placeholder:text-mute focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20" />
                                    </div>
                                    <div>
                                    <label className="sr-only">Last name</label>
                                    <input name="last" type="text" required placeholder="Last name"
                                        className="h-[52px] w-full rounded-md border border-line bg-white/40 px-4 placeholder:text-mute focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20" />
                                    </div>
                                </div>

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
                                        <svg id="eye-on" className="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                                        <svg id="eye-off" className="hidden h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.5 6.6C3.7 8.4 2 12 2 12s3.6 7 10 7c1.7 0 3.2-.4 4.5-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
                                    </button>
                                    </div>

                                    {/* <!-- Strength --> */}
                                    <div className="mt-3 flex items-center gap-4">
                                        <div className="flex flex-1 gap-1.5" aria-hidden="true">
                                            <span className="h-px flex-1 rounded-full bg-line border-t-3 border-gray-500"></span>
                                            <span className="flex-1 rounded-full bg-line border-t-3 border-gray-400"></span>
                                            <span className="h-[3px] flex-1 rounded-full bg-line border-t-3 border-gray-400"></span>
                                            <span className="h-[3px] flex-1 rounded-full bg-line border-t-3 border-gray-400"></span>
                                        </div>
                                    <p id="pw-hint" className="flex-[2] text-xs text-mute" aria-live="polite">Use 8+ characters for a stronger password</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-3">
                                    <input name="terms" type="checkbox" required
                                    className="h-[18px] w-[18px] rounded border-line accent-ink focus:ring-2 focus:ring-ink/30" />
                                    <label className="text-sm">
                                    I agree to the <a href="/terms" className="underline underline-offset-2 hover:text-mute">Terms &amp; Privacy Policy</a>
                                    </label>
                                </div>

                                <p id="form-error" className="hidden text-sm text-red-700" role="alert"></p>

                                <button type="submit"
                                    className="mt-4 inline-flex h-14 w-full max-w-[290px] bg-black items-center justify-center gap-3 rounded-full bg-ink px-8 font-medium text-white shadow-lg shadow-ink/20 transition hover:bg-ink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
                                    Continue
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                                </button>
                            </form>

                            <p className="mt-8 text-sm text-mute">
                            Already have an account? <a href="/login" className="underline underline-offset-2 hover:text-ink">Sign in</a>
                            </p>

                            {/* <!-- Perks --> */}
                            <ul className="mt-10 grid gap-5 border-t border-line pt-8 text-sm text-mute sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
                            <li className="flex items-center gap-3 sm:pr-4">
                                <svg className="h-6 w-6 shrink-0 text-ink" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"><path d="M3 12.5V4h8.5L21 13.5 13.5 21 3 12.5Z"/><circle cx="7.5" cy="8.5" r="1.2"/></svg>
                                Exclusive member offers
                            </li>
                            <li className="flex items-center gap-3 sm:px-4">
                                <svg className="h-6 w-6 shrink-0 text-ink" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="16.5" cy="17.5" r="1.7"/></svg>
                                Early access to new drops
                            </li>
                            <li className="flex items-center gap-3 sm:pl-4">
                                <svg className="h-6 w-6 shrink-0 text-ink" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"><path d="m12 3 2.7 5.8 6.3.8-4.6 4.4 1.2 6.3L12 17.2 6.4 20.3l1.2-6.3L3 9.6l6.3-.8L12 3Z"/></svg>
                                Personalized picks
                            </li>
                            </ul>
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="relative hidden lg:block min-h-[680px]">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" alt="Fashion" className="absolute inset-0 w-full h-full object-cover"/>
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        {/* Quote */}
                        <div className="absolute bottom-10 left-8 text-white font-serif italic text-3xl leading-tight">
                            Your style<br />Your Story.
                            <span className="mt-3 ml-auto block h-px w-40 bg-white/90"></span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}