module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@/*": "./src/*",
          },
        },
      ],
    ],
  }
}
