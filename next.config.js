function encodeOrignUrlCPath (str) {
  if (!str) return str
  const pathRegResult = str.match(/.*(?=\.html)/g)
  if (!pathRegResult || !pathRegResult[0]) return str
  const dateStr = pathRegResult[0].match(/\d+\//g).join('')
  if (!dateStr) return str
  // 取出原hexo中网页链接的中文部分进行转译
  const cpath = pathRegResult[0].split(dateStr)
  if (!cpath || !cpath[1]) return str
  return `/${dateStr}${encodeURIComponent(cpath[1])}`
}

module.exports = {
  webpack5: true,
  images: {
    domains: ['gravatar.com']
  },
  eslint: {
    dirs: ['components', 'layouts', 'lib', 'pages']
  },
  async headers () {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  },
  async redirects () {
    // 把原blog文章路径重定向
    return [
      {
        source: encodeOrignUrlCPath('2021/06/24/创建Vue-Google-Translate组件.html'),
        destination: '/v-goole-translate',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2021/03/24/Vue3学习笔记.html'),
        destination: '/vue3.x-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2020/11/07/react-hooks-笔记.html'),
        destination: '/react-hooks-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2020/09/21/组件设计笔记.html'),
        destination: '/component-design',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2020/03/10/Webpack4-0-学习笔记-下.html'),
        destination: '/webpack4.x-note-2',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2020/03/03/Webpack4-0-学习笔记-上.html'),
        destination: '/webpack4.x-note-1',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/12/28/页面布局笔记.html'),
        destination: '/page-layout-design',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/08/10/译文-Virtual-DOM-is-pure-overhead.html'),
        destination: '/virtual-dom-is-pure-overhead-translate',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/06/11/深入浅出react-redux笔记.html'),
        destination: '/react-redux-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/05/21/三方接入踩坑集合.html'),
        destination: '/ecommerce-3rd-question',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/03/13/Javascript继承.html'),
        destination: '/javascript-extend',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/03/02/前端代码编写注意事项.html'),
        destination: '/frontend-code-tip',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/01/03/vuesc.html'),
        destination: '/vue2.x-reactivity-template-render',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2019/01/01/vdom.html'),
        destination: '/understanding-virtual-dom-translate',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/11/11/Event-Loop总结.html'),
        destination: '/event-loop-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/11/06/HTTP1-02.html'),
        destination: '/http-note-2',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/11/03/HTTP1-0.html'),
        destination: '/http-note-1',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/09/05/CSS元素嵌套问题.html'),
        destination: '/css-element-nested',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/07/04/Nuxt.js踩坑实录.html'),
        destination: '/nuxt-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/03/25/Javascript面向对象笔记.html'),
        destination: '/javascript-oop',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2018/01/13/Mac下利用Alfred与七牛搭建markdown图床.html'),
        destination: '/mac-alfred-markdown-images',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/10/01/为gitPages开通https踩坑实录.html'),
        destination: '/gitpage-use-https',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/05/20/手撕值传递.html'),
        destination: '/javascript-pass-params-deep-clone',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/05/12/手撕闭包.html'),
        destination: '/javascript-closure',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/05/10/手撕作用域与上下文.html'),
        destination: '/javascript-scope-context',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/04/01/css水平垂直居中.html'),
        destination: '/css-horizontal-vertical-centering',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/03/05/webpack笔记.html'),
        destination: '/webpack2.x-note',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/02/15/浅谈响应式布局-自适应布局.html'),
        destination: '/responsive-layout',
        permanent: true
      },
      {
        source: encodeOrignUrlCPath('2017/01/03/sticky-footer.html'),
        destination: '/css-sticky-footer',
        permanent: true
      }
    ]
  }
}
