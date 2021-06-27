module.exports = {
    title: 'blog-jelly',
    description: 'More interests for you!',
    base:'/vuepress-starter/',
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
        nav:[
            {text:'Home',link:'/',icon: 'home'},
            {text:'HTML',link:'/HTML/'},
            {text:'Javascript',link:'/Javascript/'}
        ],
        sidebar:[
            '/',
            // 'HTML':[
                
            // ],
            // 'CSS':[],
            // 'JavaScript':[],
        ],
    },
}