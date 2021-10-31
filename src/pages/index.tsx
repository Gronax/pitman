import type { NextPage } from 'next'
import Link from 'next/link'
import range from 'lodash/range'
import Layout from '../components/Layout'
import List from '../components/List'

const Home: NextPage = () => {
  const yearRange = range(new Date().getUTCFullYear(), 2004, -1)

  return (
    <Layout title="Pitman | Home">
      <List title='Please select a year'>
        {yearRange.map((year:number) => (
          <Link key={year} href="/[year]" as={`/${year}`}>
            <a>{year}</a>
          </Link>
        ))}
      </List>
    </Layout>
  )
}

export default Home
