module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React',
      'react-bootstrap': 'Bootstrap'
    },
    global: '',
    jsNext: true,
    umd: true
  },
  webpack: {
    html: {
      template: 'demo/src/index.html'
    }
  }
}
