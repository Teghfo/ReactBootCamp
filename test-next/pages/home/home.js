import Layout from '../../components/Layout'
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <p>{router.query.id}</p>
        <p>Home</p>
      </Layout>
    </div >
  );
}



