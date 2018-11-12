module.exports = {
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      },
      '/about': {
        page: '/about'
      },
      '/p/hello-nextjs': {
        page: '/post',
        query: {
          id: "975"
        }
      },
      '/p/hello-batman': {
        page: '/post',
        query: {
          id: "481"
        }
      },
    }
  }
}
