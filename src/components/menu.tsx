"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="w-full md:mt-12 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
                    <Image
                        src="/mondii.jpg"
                        alt="mondi"
                        fill
                        style={{ objectFit: "cover" }}
                        className="brightness-50"
                    />

                    <div className="absolute inset-0 flex flex-col items-start justify-end p-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-white text-3xl md:text-6xl font-bold">
                                Welcome to Mondi Café
                            </h1>
                            <p className="text-white text-lg md:block hidden md:text-2xl mt-4 mb-2">
                                Bizning café — shahar markazida joylashgan,
                                issiq muhit va qulay sharoit bilan mijozlarni
                                kutib oladi. Har bir taom va ichimlik yangi,
                                sifatli mahsulotlardan tayyorlanadi. Sizga
                                yengil tushlikdan tortib, shirinlik va specialty
                                coffee gacha bo‘lgan keng tanlovni taqdim
                                etamiz.
                            </p>

                            <p className="text-white text-lg md:hidden block md:text-2xl md:mt-4 mb-2">
                                Bizning café — shahar markazida joylashgan,
                                issiq muhit va qulay sharoit bilan mijozlarni
                                kutib oladi.
                            </p>

                            <Link
                                href="https://t.me/MondiLocation?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn3ozAiI-5EDi9NXSOlDnxIbKzE3A-CK3dl67oTKAkitgoxYk_cm_YX-0xMq8_aem_cw7wK4P61OcaR_-yO_QDKg"
                                target="_blank"
                                className="inline-flex items-center text-body bg-white box-border rounded-[5px] border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-all ease-out duration-700 hover:bg-amber-100"
                            >
                                Bizning Manzilimiz
                                <svg
                                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;
