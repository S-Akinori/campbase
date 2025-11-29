import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2F5233", // Deep Forest Green
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#94C9A9", // Soft Green
                    foreground: "#1A2E1D",
                },
                accent: {
                    DEFAULT: "#F4E3B2", // Cream/Beige
                    foreground: "#3D3423",
                },
                background: "#FAFAF9", // Warm White
                foreground: "#333333", // Dark Gray
                muted: {
                    DEFAULT: "#F3F4F6",
                    foreground: "#6B7280",
                },
                border: "#E5E7EB",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
export default config;
