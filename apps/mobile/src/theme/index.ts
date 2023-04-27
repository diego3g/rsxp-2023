import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

type TailwindTheme = typeof tailwindConfig.theme &
  typeof tailwindConfig.theme.extend

const tailwindResolvedConfig = resolveConfig(tailwindConfig)

export const theme = tailwindResolvedConfig.theme as TailwindTheme
