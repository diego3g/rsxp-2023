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
            '@/components': './src/components',
            '@/assets': './src/assets',
            '@/theme': './src/theme',
            '@/app': './src/app',
            '@/lib': './src/lib',
            '@/services': './src/services',
            '@/utils': './src/utils',
            '@/contexts': './src/contexts',
            '@/hooks': './src/hooks',
          },
        },
      ],
    ],
  }
}
