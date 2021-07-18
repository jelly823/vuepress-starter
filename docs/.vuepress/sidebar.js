module.exports = {
    "/guide/": [{
        title: '前端面经',
        collapsable: false,
        path:'/guide/Interview',
        sidebarDepth: 0,    // 可选的, 默认值是 1
    }, {
        title: 'StartBlog',
        collapsable: false,
        path:'/guide/StartBlog',
        sidebarDepth: 0,    // 可选的, 默认值是 1
    }],
    "/HTML/": [{
        title: '基础',
        collapsable: false,
        children: [{
            title: 'HTML5语义化标签',
            link: '/HTML/HTML5语义化标签'
        }]
    }, {
        title: '高级',
        collapsable: false,
        children: [{
            title: '响应式设计',
            link: '/HTML/响应式设计'
        }]
    }]
}
