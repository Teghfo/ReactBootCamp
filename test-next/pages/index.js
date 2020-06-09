import Layout from '../components/Layout'
import Counter from '../components/Counter'
import Cards from '../components/Cards'
import fetch from 'node-fetch'

export default function Index({ data }) {
  return (
    <div>
      <Layout>
        <h1>Hello Next.js</h1>
        <p>root page</p>
        <Counter />
        <Cards data={data} />
      </Layout>
    </div>
  );
}


export async function getStaticProps() {
  const response = await fetch('https://api.randomuser.me/')
  const data = await response.json()
  console.log('hello')

  return {
    props: {
      data
    }

  }
}


