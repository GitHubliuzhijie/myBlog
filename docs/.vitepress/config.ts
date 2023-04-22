import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/myBlog/",
  title: "知识总结",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/public/favicon.ico" }]],
  themeConfig: {
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
  },
});
