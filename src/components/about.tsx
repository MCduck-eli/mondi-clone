"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <div
            className="h-auto flex flex-col"
            style={{ border: "3px solid #f7f7f7", borderRadius: "10px" }}
        >
            <div className="flex flex-row w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center"
                >
                    <img
                        src="/about-image/pasta.jpg"
                        alt="pasta"
                        className="w-30 md:w-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center flex-col p-3 md:p-10"
                >
                    <h1 className="text-[22px] md:text-[60px] text-sky-400 font-bold mb-1">
                        Bizning Café
                    </h1>
                    <p className="text-[13px] leading-snug md:text-[18px] md:leading-normal line-clamp-3 md:line-clamp-none">
                        Bizning café 2018-yilda tashkil topgan bo‘lib, shahar
                        markazida qulay va iliq muhit yaratish maqsadida
                        ochilgan. Café’da har bir mehmon uchun sifatli qahva,
                        mazali taomlar va shirinliklar taklif etiladi.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-row w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center flex-col p-3 md:p-10"
                >
                    <h1 className="text-[20px] md:text-[50px] text-sky-400 font-bold mb-1">
                        Bizning Qadriyatlarimiz
                    </h1>
                    <p className="text-[13px] leading-snug md:text-[18px] md:leading-normal line-clamp-3 md:line-clamp-none">
                        Biz uchun eng muhimi — sifat va ishonch. Har bir
                        ichimlik va taom toza va sifatli mahsulotlardan
                        tayyorlanadi. Biz café’ni dam olish maskani deb bilamiz.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center mb-4 md:mb-15"
                >
                    <img
                        src="/about-image/steyk.jpg"
                        alt="pasta"
                        className="w-30 md:w-75"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
