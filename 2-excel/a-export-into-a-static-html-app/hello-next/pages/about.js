import Layout from '../components/MyLayout.js';

export default () => (
  <Layout>
    <p>This is the about page</p>
  </Layout>
)

// Akternative #1
// const Page = () => (
//   <p>This is the about page</p>
// )

// export default Layout(Page);

// Alternative #2
// const Page = () => (
//   <p>This is the about page</p>
// )

// export default () => (<Layout page={Page} />)

// Alternative #3
// const content = (<p>This is the about page</p>)

// export default () => (<Layout content={content} />)
