module.exports = {
  eslint: {},
  jest: {
    configure: {
      preset: 'ts-jest',
    },
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
