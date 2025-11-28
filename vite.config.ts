import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  },
    css: {
        modules: {
            // 启用驼峰转换
            localsConvention: 'camelCaseOnly' // 或 'camelCase'
        }
    }
})
