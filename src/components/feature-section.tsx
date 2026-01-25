"use client";

import Image from "next/image";
import featureElement from "../config/feature-element";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const FeatureSection = () => {
    return (
        <div className="w-full py-8 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {featureElement.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: { xs: "8px", sm: "12px", md: "16px" },
                            }}
                            className="bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 md:mb-4">
                                    <Image
                                        src={item.images}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                                    />
                                </div>

                                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">
                                    {item.title}
                                </p>
                            </motion.div>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
