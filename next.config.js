const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Add this line
  images: {
    disableStaticImages: true
  }
};

module.exports = withTM(withFonts(withImages(nextConfig)));
