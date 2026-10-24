import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      // Configuración de alias para rutas absolutas
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@themes', replacement: path.resolve(__dirname, 'src/themes') }
    ]
  },
  server: {
    port: 3000,
    open: true
  }
})
