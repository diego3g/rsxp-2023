module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/components': './app/components',
            '@/assets': './app/assets',
            '@/theme': './app/theme',
          },
        },
      ],
    ],
  }
}
