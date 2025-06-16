const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    // "./src/**/*.{html,ts}",
    "./apps/astro-nft/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
