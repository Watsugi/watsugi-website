import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink:"#1c2a39", earth:"#8b5e34", paper:"#f7f1e7", sand:"#efe3d1", line:"#d8c9b2" } } },
  plugins: [],
};
export default config;
