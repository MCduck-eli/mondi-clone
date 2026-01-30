"use client";

import favoritesMaterial from "../config/favorites-material";
import Image from "next/image";
import { motion } from "framer-motion";

const Favorites = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="flex text-center md:text-start">
                <h1 className="md:text-4xl text-2xl font-bold p-5">
                    Bizning sevimli mahsulotlarimiz
                </h1>
            </div>
            <div className=" flex md:flex-row flex-col  gap-4">
                {favoritesMaterial.map((item) => (
                    <div
                        key={item.id}
                        className=" mt-[20px 0px] bg-neutral-primary-soft block rounded-[5px] md:max-w-sm w-full p-6 cursor-pointer bg-amber-50 border-default rounded-base shadow-xs transition-all ease-out duration-800 hover:bg-sky-500 hover:text-white"
                    >
                        <div className="relative flex justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                height={200}
                                width={300}
                                objectFit="cover"
                                className="rounded-[5px]"
                            />
                        </div>

                        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading flex justify-center md:justify-start">
                            {item.title}
                        </h5>

                        <p className="mb-6 text-body flex justify-center md:justify-start">
                            {item.description}
                        </p>
                        <a
                            href="#"
                            className="md:inline-flex items-center flex justify-center md:justify-start text-body bg-neutral-secondary-medium box-border border rounded-[5px] border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-all ease-out duration-700 hover:bg-amber-100"
                        >
                            Mahsulot Haqida
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke-width="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Favorites;
