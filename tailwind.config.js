/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      keyframes: {
        'shadow-pop': {
          '0%, 100%': {
            transform: 'translateZ(0)',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
          },
          '50%': {
            transform: 'translateY(-4px) scale(1.05)',
            boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
          },
        },
      },
      animation: {
        'shadow-pop': 'shadow-pop 3s ease-in-out infinite',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
