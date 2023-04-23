import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/myBlog/",
  title: "知识总结",
  // lang: 'zh-cmn-Hans',
  lang: "zh-CN",
  description: "A VitePress Site",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: "首页", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "HTTP 状态码",
        items: [{ text: "状态码列表", link: "/statusCode" }],
      },
      {
        text: "GIT",
        items: [{ text: "git命令", link: "/gitCommand" }],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/GitHubliuzhijie/myBlog" },
    ],

    search: {
      provider: "local",
    },
  },
});
