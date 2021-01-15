const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(['@react95/core']);

module.exports = withTM(withFonts());
