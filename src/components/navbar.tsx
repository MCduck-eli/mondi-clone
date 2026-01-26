"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-blue-400 fixed w-full z-20 top-0 start-0 text-white shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    onClick={closeMenu}
                >
                    <div className="relative">
                        <Image
                            src={"/mondi-logo.jpg"}
                            alt="logo"
                            height={80}
                            width={80}
                            priority
                            style={{ borderRadius: "100%", objectFit: "cover" }}
                            className="md:block hidden"
                        />
                        <Image
                            src={"/mondi-logo.jpg"}
                            alt="logo"
                            height={50}
                            width={50}
                            priority
                            style={{ borderRadius: "100%", objectFit: "cover" }}
                            className="md:hidden block"
                        />
                    </div>
                    <h1 className="md:text-6xl text-4xl font-bold text-white">
                        Mondi{" "}
                        <span className="text-gray-700 md:text-5xl text-3xl">
                            Café
                        </span>
                    </h1>
                </Link>

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    )}
                </button>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto absolute md:static top-16 left-0 md:top-auto md:left-auto bg-blue-400 md:bg-transparent shadow-lg md:shadow-none transition-all duration-300`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 border-b border-blue-300 md:border-0 rounded-base bg-blue-400 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <Link
                                href="/"
                                className="block py-3 px-4 text-white hover:bg-blue-500 rounded md:bg-transparent md:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-100 transition-colors"
                                onClick={closeMenu}
                            >
                                Asosiy sahifa
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/all-products"
                                className="block py-3 px-4 text-white hover:bg-blue-500 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 transition-colors"
                                onClick={closeMenu}
                            >
                                Bizning mahsulotlar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-3 px-4 text-white hover:bg-blue-500 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 transition-colors"
                                onClick={closeMenu}
                            >
                                Biz bilan bog'lanish
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
