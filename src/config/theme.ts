"use client";
import { createTheme } from "@mui/material/styles";
import { Nunito } from "next/font/google";

const roboto = Nunito({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    colorSchemes: { light: true },
    cssVariables: {
        colorSchemeSelector: "class",
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
