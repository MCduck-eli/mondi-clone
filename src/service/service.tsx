import { request, gql } from "graphql-request";
import GetProducts from "../interfaces";

const graphqlAPI =
    "https://us-west-2.cdn.hygraph.com/content/cmkzvjib6020607w170an5els/master";

export const getService = {
    async GetPosts() {
        const query = gql`
            query MyProducts {
                products {
                    image {
                        url
                    }
                    sale
                    slug
                    title
                }
            }
        `;

        try {
            const result = await request<{ products: GetProducts[] }>(
                graphqlAPI,
                query,
            );

            return result.products;
        } catch (error: any) {
            console.error("❌ GraphQL xatosi:", error.message);
            return [];
        }
    },
};
