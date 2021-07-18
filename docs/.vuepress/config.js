const sidebar = require('./sidebar')
const nav = require('./nav')
module.exports = {
    title: 'blog-jelly',
    description: 'More interests for you!',
    base: '/vuepress-starter/',
    theme: 'cool',
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            md.set({ html: true })
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-katex'))
            md.use(require('markdown-it-plantuml'))
            md.use(require('markdown-it-admonition'))
        },
    },
    themeConfig: {
        logo: '/logo.svg',
        lastUpdated: 'Last Updated', // string | boolean
        mdEnhance: {
            mermaid: true,
            lineNumbers: false,
        },
        iconPrefix: 'icon-',
        feed: false,
        hostname: 'https://jellyl823.github.io/',
        nav,
        sidebar
    },
    plugins: [
        [
            'vuepress-plugin-helper-live2d', {
                // 是否开启控制台日志打印(default: false)
                log: false,
                live2d: {
                    // 是否启用(关闭请设置为false)(default: true)
                    enable: true,
                    // 模型名称(default: hibiki)>>>取值请参考：
                    // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                    model: 'hijiki',// 黑色背景下换成这个'tororo'
                    display: {
                        position: "right", // 显示位置：left/right(default: 'right')
                        width: 135, // 模型的长度(default: 135)
                        height: 300, // 模型的高度(default: 300)
                        hOffset: 65, //  水平偏移(default: 65)
                        vOffset: 0, //  垂直偏移(default: 0)
                    },
                    mobile: {
                        show: false // 是否在移动设备上显示(default: false)
                    },
                    react: {
                        opacity: 0.8 // 模型透明度(default: 0.8)
                    }
                }
            }
        ]
    ]
}
