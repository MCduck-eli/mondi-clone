import Image from "next/image";
import GetProducts from "@/src/interfaces";
import { getService } from "@/src/service/service";

async function getProducts(): Promise<GetProducts[]> {
    try {
        const products = await getService.GetPosts();
        return products;
    } catch (error) {
        console.error("❌ Xato:", error);
        return [];
    }
}

const AllProducts = async () => {
    const products = await getProducts();

    console.log(products);

    return (
        <div className="relative w-full min-h-screen">
            <Image
                src="/background.png"
                alt="background"
                fill
                className="object-cover"
                priority
            />

            <div className="relative z-10 w-[87%] mx-auto py-20  grid grid-cols-1 text-center justify-center md:grid-cols-3 gap-6">
                {products &&
                    products.map((item) => (
                        <div
                            key={item.title}
                            className="text-white rounded-[10px] max-w-sm p-6 shadow-lg bg-black/40 backdrop-blur"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.image.url}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-lg hover:scale-105 transition-all ease-out duration-700"
                                />
                            </div>

                            <h5 className="mt-6 mb-2 text-2xl font-semibold">
                                {item.title}
                            </h5>

                            <div className="w-full h-1.5 bg-linear-to-r from-teal-400 via-cyan-500 to-teal-700 rounded-full" />

                            <p className="mb-6 mt-5">{item.sale}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllProducts;
