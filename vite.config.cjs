import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from "path";
import { viteMockServe } from 'vite-plugin-mock'

/** 路径查找 */
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};


/** 设置别名 */
const alias = {
  "@": pathResolve("src"),
};
export default defineConfig({
  resolve: {
    alias
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [react(),
    viteMockServe({
      mockPath: 'mock', // mock工作路径
      enable: true,  // 是否开启mock
    }),
  ],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  }
})
