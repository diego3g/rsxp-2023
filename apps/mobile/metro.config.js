/**
 * This file was copied from monorepo example on Expo docs
 * https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
 */

const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

// Find the project and workspace directories
const projectRoot = __dirname

// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot]

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true

// SVG Transform.
const { transformer, resolver } = config

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
}

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
}

module.exports = config
