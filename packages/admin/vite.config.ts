import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
// 自动引入
const auto = () =>
  AutoImport({
    // 包含的文件
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    dts: false, // auto-import.d.ts 使用ts建议开启
    imports: ["vue", "vue-router", "vuex"],
  });
const path = require("path");
const proxy = require("../../build/proxy");
const server = {
  port: 3000,
  proxy: proxy,
};
const vueConfig = {
  plugins: [vue(), vueJsx(), auto()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server,
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
export default defineConfig(vueConfig);
