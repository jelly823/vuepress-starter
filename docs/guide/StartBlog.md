
## 搭建你的第一个博客

### 快速上手

::: tip
选择使用vuepress，万物先看官方文档
:::

[vuepress官网｜快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html)

根据官网傻瓜操作，很多细节文档都有，不赘述太多，只记录概要流程

1. 首先，了解目录结构，官网也有，需要知道我们在哪里存放 *配置文件* 和 *markdown文章* 。

```
vuepress-starter
├── docs
│   ├── README.md
│   ├── config.md
│   └── guide
├── package-lock.json
└── package.json
```

docs主要存放我们的 *markdown文章* ，我们新建几个分类目录后
```
vuepress-starter
├── docs
│   ├── CSS
│   │   ├── CSS3.md
│   │   └── README.md
│   ├── HTML
│   │   └── README.md
│   ├── JavaScript
│   │   ├── 红宝书.md
│   │   └── README.md
│   ├── README.md
│   ├── config.md
│   └── guide
│   │   └── README.md
├── package-lock.json
└── package.json
```


2. 而 *配置文件* `.vuepress`，官网说要自己新建并配置，规则也写的很详细。
```
.vuepress
├── components
├── config.js
├── enhanceApp.js
├── nav.js
├── public
├── sidebar.js
└── styles
```


3. 启动项目

``` Bash
npm run docs:dev
```


4. Github 管理自己的Blog项目

可以参考大佬文章

[GithubActions 部署vuepress](https://lastknightcoder.github.io/lastknightcoder/%E4%BD%BF%E7%94%A8%20Github%20Actions%20%E9%83%A8%E7%BD%B2%20VuePress%20%E5%8D%9A%E5%AE%A2/)

[Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)


![Action-gh-page](https://user-images.githubusercontent.com/31650787/126064007-bd45a43b-687e-404a-b155-bef52e23f54e.png)


5. 遇到问题

- 新项目或者刚git clone 下的项目遇到报错，没有全局安装工具依赖
>bash: vue:command not found,
>sh: vuepress: command not found...

解决
``` Bash
npm i -g vue
npm i -g vuepress
```

- 源的问题
>npm ERR! code ETIMEDOUT npm ERR!

换淘宝源即可解决
``` Bash
npm cache clean --force
npm install -g cnpm --registry=https://registry.npm.taobao.org
```


