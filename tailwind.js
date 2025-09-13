tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#059669", // Emerald
          dark: "#047857",
          light: "#6ee7b7",
        },
        coffee: "#6B4226",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/cafe-bg.jpg')",
      },
    },
  },
};
