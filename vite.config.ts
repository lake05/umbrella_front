import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteImages from 'vite-plugin-vue-images'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import { join } from 'path'
function _resolve(dir) {
  return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({}),
    AutoImport({
      imports: ['vue'],
    }),
    ViteImages({
      dirs: ['src/assets/images'], // 指明图片存放目录
      extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
      customSearchRegex: '([a-zA-Z0-9]+)', // 重写搜索要替换的变量的Regex。
    }),
  ],
})
