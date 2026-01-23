import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral-primary-soft">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a
                                href="https://flowbite.com/"
                                className="flex items-center"
                            >
                                <div className="relative">
                                    <Image
                                        src={"/mondi-logo.jpg"}
                                        alt="logo"
                                        height={80}
                                        width={80}
                                        priority
                                        style={{
                                            borderRadius: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                                <span className="text-heading self-center text-xl font-semibold whitespace-nowrap">
                                    Mondi
                                </span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                                    Resources
                                </h2>
                                <ul className="text-body font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://flowbite.com/"
                                            className="hover:underline"
                                        >
                                            Flowbite
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindcss.com/"
                                            className="hover:underline"
                                        >
                                            Tailwind CSS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                                    Follow us
                                </h2>
                                <ul className="text-body font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/themesberg/flowbite"
                                            className="hover:underline "
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/4eeurUVvTy"
                                            className="hover:underline"
                                        >
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                                    Legal
                                </h2>
                                <ul className="text-body font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-body sm:text-center">
                            © 2026{" "}
                            <a
                                href="https://flowbite.com/"
                                className="hover:underline"
                            >
                                Flowbite™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a
                                href="#"
                                className="text-body hover:text-heading"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="#"
                                className="text-body hover:text-heading ms-5"
                            >
                                <TelegramIcon />
                            </a>

                            <a
                                href="#"
                                className="text-body hover:text-heading ms-5"
                            >
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
