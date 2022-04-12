module.exports = {
  webpack5: true,
  images: {
    domains: ['gravatar.com']
  },
  eslint: {
    dirs: [
      'components',
      'layouts',
      'lib',
      'pages'
    ]
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
        source: '/2021/06/24/创建Vue-Google-Translate组件',
        destination: '/v-goole-translate',
        permanent: false
      }
    ]
  }
}
