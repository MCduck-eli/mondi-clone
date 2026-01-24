import { Box } from "@mui/material";
import FeatureSection from "../components/feature-section";
import Hero from "../components/hero";

const IndexPage = () => {
    return (
        <div>
            <Hero />
            <Box sx={{ width: "70%", mx: "auto" }}>
                <FeatureSection />
            </Box>
        </div>
    );
};

export default IndexPage;
