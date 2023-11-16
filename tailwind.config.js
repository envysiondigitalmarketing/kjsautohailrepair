/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    extend: {
      backgroundImage: {
        hero_bg:
          "linear-gradient(120deg,rgba(0,0,0,0.3)50%,rgba(0,0,0,0.3)50%),url('./assets/hero_home.webp')",
        contact_bg:
          " linear-gradient(120deg,rgba(0,0,0,0.3)50%,rgba(0,0,0,0.3)50%),url('./assets/contact.webp')",
        service_bg:
          " linear-gradient(120deg,rgba(0,0,0,0.3)50%,rgba(0,0,0,0.3)50%),url('./assets/service.webp')",
      },
    },
  },
  plugins: [],
};
