module.exports = {
    title: '前端365',
    description: '前端学习博客',
    themeConfig: {
      nav: [
        { text: '基础篇', link: '/base/base.md' },
        { text: '提高篇', link: '/improve/improve.md' },
        { text: '原理篇', link: '/principle/principle.md' },
        { text: '算法篇', link: '/algorithm/algorithm.md' },
        { text: '网络篇', link: '/http/http.md' },
        { text: '总结篇', link: '/summary/summary.md' },
        { text: 'Github', link: 'https://github.com/Alan0625/' },
        {
            text: '工具',
            ariaLabel: '工具导航',
            items: [
              { text: '压图Tinypng', link: 'https://tinypng.com/' },
              { text: '编码/解码', link: 'https://tool.chinaz.com/tools/urlencode.aspx' }
            ]
        }
      ],
      sidebar: [
        {
          title: '基础学习',
          path: '/base/base.md',
          collapsable: true, // 不折叠
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            { title: "HTML", path: "/" },
            { title: "CSS", path: "/" },
            { title: "Js", path: "/" },
            { title: "ES6+", path: "/" },
          ]
        },
        {
          title: "进阶学习",
          path: '/improve/improve.md',
          collapsable: true, // 不折叠
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            { title: "React", path: "/" },
            { title: "Vue", path: "/" }
          ],
        },
        {
          title: "总结学习",
          path: '/summary/summary.md',
          collapsable: false, // 不折叠
        }
      ]
    }
}