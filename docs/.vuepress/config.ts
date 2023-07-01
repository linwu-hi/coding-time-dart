import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = process.env["BASE"] ? '/dart/':'/coding-time-dart/'



export default defineUserConfig({
  base,
  dest: "./dist",
  head:[
    ['meta', { name: 'baidu-site-verification', content: 'codeva-IkQhVRqkxI' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/assets/image/icon.png' }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "编程时光",
    },
  },

  theme,

  shouldPrefetch: false,
});
