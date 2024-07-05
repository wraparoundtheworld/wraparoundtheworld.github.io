const withFonts = require('next-fonts');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ?  '/wraparoundtheworld.github.io' : '',
    assetPrefix: isProd ? '/wraparoundtheworld.github.io/' : '',
  reactStrictMode: true,
  output: "export",	
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = withTM(withFonts(withImages(nextConfig)));