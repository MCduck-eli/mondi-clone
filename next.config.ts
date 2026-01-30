const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "us-west-2.graphassets.com",
            },
        ],
    },
};

module.exports = nextConfig;
