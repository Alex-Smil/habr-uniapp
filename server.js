require('@babel/register');
require('./src/server');

['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => {
  require.extensions[ext] = () => {};
});
