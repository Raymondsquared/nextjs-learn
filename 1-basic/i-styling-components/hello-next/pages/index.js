import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import axios from 'axios';

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {
        props.shows.map(
          ({ show }) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          )
        )
      }
    </ul>
  </Layout>
)

Index.getInitialProps = async function ()
{
  const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = await response.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}

export default Index;
