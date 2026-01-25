import { Box } from "@mui/material";
import FeatureSection from "../components/feature-section";
import Hero from "../components/hero";
import Favorites from "../components/favorites";
import Menu from "../components/menu";
import About from "../components/about";

const IndexPage = () => {
    return (
        <div>
            <Hero />
            <Box sx={{ width: "70%", mx: "auto" }}>
                <FeatureSection />
            </Box>

            <Box
                style={{ backgroundColor: "" }}
                className="bg-amber-50 md:h-[80vh] h-auto "
            >
                <Box
                    sx={{
                        width: "87%",
                        mx: "auto",
                    }}
                >
                    <Favorites />
                </Box>
            </Box>

            <Menu />
            <Box sx={{ width: "87%", mx: "auto", py: "40px" }}>
                <About />
            </Box>
        </div>
    );
};

export default IndexPage;
