import type { NextPage } from 'next'
import range from 'lodash/range'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const yearRange = range(new Date().getUTCFullYear(), 2004, -1)

  return (
    <Layout title="Pitman | Home">
      <h1>Index 👋</h1>
      <div>
        <ul>
          {yearRange.map((year:number) => (
            <li key={year}>
							<Link href="/[year]" as={`/${year}`}>
								<a>{year}</a>
							</Link>
						</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
