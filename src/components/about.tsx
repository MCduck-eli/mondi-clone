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
                        className="w-[160px] md:w-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center flex-col p-4 md:p-10"
                >
                    <h1 className="text-[28px] md:text-[60px] text-sky-400 font-bold mb-1">
                        Bizning Café
                    </h1>
                    <p className="text-[14px] md:text-[18px]">
                        Bizning café 2018-yilda tashkil topgan bo‘lib, shahar
                        markazida qulay va iliq muhit yaratish maqsadida
                        ochilgan. Café’da har bir mehmon uchun sifatli qahva,
                        mazali taomlar va shirinliklar taklif etiladi. Biz
                        tezkor va samimiy xizmat, yangi mahsulotlar hamda
                        yoqimli muhit orqali mehmonlarimizga har safar unutilmas
                        lahzalar taqdim etamiz.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-row w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center flex-col p-4 md:p-10"
                >
                    <h1 className="text-[24px] md:text-[50px] text-sky-400 font-bold mb-1">
                        Bizning Qadriyatlarimiz
                    </h1>
                    <p className="text-[14px] md:text-[18px]">
                        Biz uchun eng muhimi — sifat va ishonch. Har bir
                        ichimlik va taom buyurtma asosida, toza va sifatli
                        mahsulotlardan tayyorlanadi. Jamoamiz har bir mehmonni
                        e’tibor bilan kutib oladi va qulay muhit yaratishga
                        intiladi. Biz café’ni shunchaki ovqatlanish joyi emas,
                        balki dam olish va yoqimli vaqt o‘tkazish maskani deb
                        bilamiz.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-[50%] flex justify-center mb-6 md:mb-15"
                >
                    <img
                        src="/about-image/steyk.jpg"
                        alt="pasta"
                        className="w-[150px] md:w-[300px]"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
