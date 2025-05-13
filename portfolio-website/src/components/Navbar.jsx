import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 md:px-10 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-primary">
                Lakshmi Vishal
            </Link>

            <div className="flex gap-2 md:gap-6 text-gray-700 font-medium">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className={`transition-colors hover:text-primary ${router.pathname === item.path ? "text-primary font-semibold" : ""
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
