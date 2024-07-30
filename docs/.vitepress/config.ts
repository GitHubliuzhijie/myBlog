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
    logo: "/logo.png",
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
        items: [
          { text: "git命令", link: "/gitCommand" },
          { text: "git提交规范", link: "/gitSpecification" },
        ],
      },
      {
        text: "Nginx",
        items: [{ text: "nginx常用命令", link: "/nginxCommand" }],
      },
      {
        text: "前端知识总结",
        items: [
          { text: "资源提示符", link: "/js/resourcePrompt" },
          {
            text: "JS-35个实用方法",
            link: "/js/js35",
          },
        ],
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
