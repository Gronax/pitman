import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import range from 'lodash/range'
import Layout from '../components/Layout'
import { DriverStandings, DriverStandingsLists } from '../types/standings'

type ratingTypes = {
  [key: string]: string;
};

const rating: ratingTypes = {
  //1: '🥇',
  1: '🏆',
  2: '🥈',
  3: '🥉'
}

const Standings: NextPage<{standings: DriverStandingsLists}> = ({ standings }) => {
  console.log(standings)
  return (
    <Layout title="Pitman | Home">
      <h1>standings 👋</h1>
      season:  {standings.season} 🌍 round: {standings.round}
        <ul>
          {standings.DriverStandings ?
          standings.DriverStandings.map((standing: DriverStandings) => (
            <li key={standing.Driver?.driverId} style={{...( standing.position === '1' && { backgroundColor: 'aqua' })}}>
              {rating[standing.position || 0]}
              {/* {standing?.position === '1' && '🏆'} */}
              {standing.position}
              {' - '}
							{standing?.Driver?.givenName}
              {' '}
							{standing?.Driver?.familyName}
              {' PTS: '}
							{standing?.points}
              {' '}
              Wins: {standing?.wins} {Number(standing.wins) > 0 && '🏁'}
						</li>
          )) :
          <div>no data</div>
          }
        </ul>
    </Layout>
  )
}

export default Standings

export const getStaticPaths: GetStaticPaths = async () => {
  const yearRange = range(new Date().getUTCFullYear(), 2004, -1)
  // Get the paths we want to pre-render based on users
  const paths = yearRange.map(year => ({
    params: { year: year.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const standings: DriverStandingsLists = await fetch(`https://ergast.com/api/f1/${params?.year}/driverStandings.json`)
      .then(res => res.json())
      .then(result => result.MRData.StandingsTable.StandingsLists[0]);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { standings } }
  } catch (err:any) {
    return { props: { errors: err.message } }
  }
}