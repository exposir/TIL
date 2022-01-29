const sidebar = {
  home: [
    ["/", "Enjoy Life"],
    {
      title: "Pin",
      collapsable: true,
      children: [
        ["/pin/互联网常用名词", "互联网常用名词"],
        ["/pin/有趣的题目", "有趣的题目"],
        ["/pin/Leetcode Top 100", "Leetcode Top 100"],
      ],
    },
    {
      title: "Post",
      collapsable: true,
      children: [
        ["/post/重学 Javascript（一）", "重学 Javascript（一）"],
        ["/post/webpack", "webpack"],
        ["/post/git 提交指北", "git 提交指北"],
        [
          "/post/《When to pick Gatsby, Next.Js or Create React App》翻译",
          "《When to pick Gatsby, Next.Js or Create React App》翻译",
        ],
        ["/post/学习之路", "学习之路"],
        ["/post/有关 CDN 的几个问题", "有关 CDN 的几个问题"],
        ["/post/前端全链路性能优化", "前端全链路性能优化"],
        ["/post/缓存那些事", "缓存那些事"],
      ],
    },
    {
      title: "Note",
      collapsable: true,
      children: [
        ["/note/《Javascript 悟道》读书笔记 ", "《Javascript 悟道》读书笔记 "],
        [
          "/note/《他改变了中国：江泽民传》书摘",
          "《他改变了中国：江泽民传》书摘",
        ],
      ],
    },
    {
      title: "Else",
      collapsable: true,
      children: [["/else/牛肉干营养成分表", "牛肉干营养成分表"]],
    },
  ],
};
module.exports = {
  title: "Exposir",
  description: "孟世博的博客",
  dest: "public",
  serviceWorker: false,
  head: [["script", { src: "/assets/js/tj.js" }]],
  configureWebpack: {
    resolve: {
      alias: {},
    },
  },
  markdown: {},
  themeConfig: {
    repo: "exposir/personal-blog",
    repoLabel: "Github",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "编辑此页",
    lastUpdated: "lastUpdate",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Store",
        link: "/store/",
      },
    ],
    sidebar: {
      "/store/": [],
      "/es6tutorial/": [],
      "/maozedong/": [],
      "/renzhengfei/": [],
      "/ruanyifeng/": [],
      collapsable: false,
      "/": sidebar.home,
    },
  },
  base: "",
};
