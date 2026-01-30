import Image from "next/image";

const ContactPage = () => {
    return (
        <div className="relative w-full min-h-screen">
            <Image
                src="/background.png"
                alt="background"
                fill
                className="object-cover -z-20"
                priority
            />

            <div className="relative z-10 bg-base-200/80 py-14 md:py-6 sm:py-16 lg:py-24">
                <div className="mx-auto text-white max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative mx-auto mb-10 w-fit sm:mb-16 lg:mb-24">
                        <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
                            Biz Bog'laning va Lazzatlaning
                        </h2>
                        <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-linear-to-r"></span>
                    </div>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <Image
                            src={"/mondi1.webp"}
                            alt="mondi"
                            width={1000}
                            height={900}
                            objectFit="cover"
                            className="rounded-[5px]"
                        />

                        <div>
                            <h3 className="text-base-content mb-6 text-2xl font-semibold">
                                Sizga Yordam berganimizdan hursandmiz!
                            </h3>
                            <p className="text-base-content/80 mb-10 text-lg font-medium">
                                FlyonUI gives you the blocks and components you
                                need to create a truly professional website,
                                landing page or admin panel for your SaaS and
                                gives the blocks.
                            </p>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="card shadow-none">
                                    <div className="card-body text-center gap-3">
                                        <div className="avatar avatar-placeholder">
                                            <div className="border-primary/20 text-primary w-full rounded-full border">
                                                <span className="icon-[tabler--clock] text-primary size-6"></span>
                                            </div>
                                        </div>
                                        <h4 className="text-base-content text-lg font-medium">
                                            Ish-tartibi
                                        </h4>
                                        <div className="text-center">
                                            <p className="text-base-content/80">
                                                Dushanbadan-Yakshanbagacha
                                            </p>
                                            <p className="text-base-content/80">
                                                8:00 dan 22:00 gacha
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow-none">
                                    <div className="card-body text-center gap-3">
                                        <div className="avatar avatar-placeholder">
                                            <div className="border-primary/20 text-primary w-full rounded-full border">
                                                <span className="icon-[tabler--map-pin] text-primary size-6"></span>
                                            </div>
                                        </div>
                                        <h4 className="text-base-content text-lg font-medium">
                                            Manzilimiz
                                        </h4>
                                        <address className="text-base-content/80 text-center not-italic">
                                            Guliston Shahar
                                            <br />
                                            Islom Karimov Ko'chasi
                                        </address>
                                    </div>
                                </div>

                                <div className="card shadow-none">
                                    <div className="card-body text-center gap-3">
                                        <div className="avatar avatar-placeholder">
                                            <div className="border-primary/20 text-primary w-full rounded-full border">
                                                <span className="icon-[tabler--phone] text-primary size-6"></span>
                                            </div>
                                        </div>
                                        <h4 className="text-base-content text-lg font-medium">
                                            Telefon Nomerlarimiz
                                        </h4>
                                        <div className="text-center">
                                            <p className="text-base-content/80">
                                                +998-94-022-0361
                                            </p>
                                            <p className="text-base-content/80">
                                                +998-90-123-4567
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
