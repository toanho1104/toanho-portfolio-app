module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@stacks': './src/stacks',
          '@types': './src/types',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@contexts': './src/contexts',
        },
      },
    ],
  ],
};
