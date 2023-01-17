import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href='/'>
                    <Image
                        className="rounded-full"
                        src="https://cdn.vectorstock.com/i/1000x1000/25/50/yellow-square-geometric-texture-background-vector-16792550.webp"
                        height={50}
                        width={50}
                        alt="logo"
                    />
                </Link>
                <h1>THE BLOG</h1>
            </div>
            <div>
                <Link href='/' className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
                Sign Up
                </Link>
            </div>
        </header>
    );
}

export default Header;

// 57:53