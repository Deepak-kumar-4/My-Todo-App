import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    return (
        <SessionProvider session={pageProps.session}>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            )}

            {/* Modern Navbar */}
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Brand Logo */}
                    <h1 className="text-2xl font-bold tracking-wide">
                        <span className="text-blue-400">To-Do</span> App
                    </h1>

                    {/* Navigation Links */}
                    <div className="space-x-6 hidden md:flex">
                        <NavItem href="/" text="Home" />
                        <NavItem href="/todo" text="To-Do" />
                        <NavItem href="/public-tasks" text="Public Tasks" />
                        <NavItem href="/about" text="About" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white text-2xl focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            <Component {...pageProps} />
        </SessionProvider>
    );
}

/* NavItem Component (Reusable) */
const NavItem = ({ href, text }) => (
    <Link href={href} className="relative group text-lg font-medium transition duration-300">
        {text}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
    </Link>
);
