const sidebar = {
  home: [
    ["/", "Enjoy Life"],
    ["/pin/互联网常用名词", "互联网常用名词"],
    ["/pin/有趣的题目", "有趣的题目"],
    ["/pin/Leetcode Top 100", "Leetcode Top 100"],
    ["/pin/文章", "文章"],
    // {
    //   title: "文章",
    //   collapsable: true,
    //   children: [
    //     ["/post/重学 Javascript（一）", "重学 Javascript（一）"],
    //     ["/post/webpack", "webpack"],
    //     ["/post/git 提交指北", "git 提交指北"],
    //     [
    //       "/post/《When to pick Gatsby, Next.Js or Create React App》翻译",
    //       "《When to pick Gatsby, Next.Js or Create React App》翻译",
    //     ],
    //     ["/post/学习之路", "学习之路"],
    //     ["/post/我是怎样部署静态网站的", "我是怎样部署静态网站的"],
    //     ["/post/前端全链路性能优化", "前端全链路性能优化"],
    //     ["/post/缓存那些事", "缓存那些事"],
    //     ["/post/《Javascript 悟道》读书笔记 ", "《Javascript 悟道》读书笔记 "],
    //     [
    //       "/post/《他改变了中国：江泽民传》书摘",
    //       "《他改变了中国：江泽民传》书摘",
    //     ],
    //     ["/post/牛肉干营养成分表", "牛肉干营养成分表"],
    //   ],
    // },
  ],
};
module.exports = {
  title: "Exposir",
  description: "孟世博的博客",
  dest: "public",
  serviceWorker: false,
  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5343da773d52d4e68e0bcaf4c1654722";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
    ],
  ],
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
      collapsable: false,
      "/": sidebar.home,
    },
  },
  base: "",
};
