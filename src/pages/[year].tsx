import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import range from 'lodash/range'
import Layout from '../components/Layout'
import { RaceResult, DriverStandings } from '../types/api'
import styles from '../styles/list.module.scss'
import { FaHashtag, FaCode, FaTrophy, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import moment from 'moment'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const MOMENT_FORMAT = 'DD.MM.YYYY'

const Standings: NextPage<{races: RaceResult[], standings: DriverStandings}> = ({ races, standings }) => {
  const router = useRouter()
  const { year } = router.query

  return (
    <Layout title="Pitman | Home">
    <h1 className={styles.title}>{year} Grand Prix</h1>
      <div className={styles.listContainer}>
        {races.map(race => {
          const isWorldChampion = race.Results[0].Driver.driverId === standings.Driver.driverId
          return (
            <div key={race.round} className={styles.listItem}>
              <a href={race.url} target='_blank' rel="noreferrer" className={styles.raceName}>{race.raceName}</a>
              <h5 className={styles.circuitName}>
                <a href={race.Circuit.url} target='_blank' rel="noreferrer">
                  {race.Circuit?.circuitName}
                </a>
                <small>
                  {moment(race.date).format(MOMENT_FORMAT)}
                </small>
              </h5>
              {race.Results[0] && (
                <div>
                  <a href={race.Results[0].Driver.url} target='_blank' rel="noreferrer" className={styles.driverName}>
                    {isWorldChampion && <FaTrophy className={clsx([styles.icon, styles.iconTrophy])} />}
                    {`${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`}
                  </a>
                  <div className={styles.driverDetails}>
                    <div><FaBirthdayCake className={clsx([styles.icon, styles.iconBday])} />{moment(race.Results[0].Driver.dateOfBirth).format(MOMENT_FORMAT)}</div>
                    <div>
                      <a href={race.Results[0].Constructor.url} target='_blank' rel="noreferrer">
                        <FaIdCard className={clsx([styles.icon, styles.iconConstructor])} />
                        {race.Results[0].Constructor.name}
                      </a>
                    </div>
                    <div><FaCode className={clsx([styles.icon, styles.iconCode])} />{race.Results[0].Driver.code}</div>
                    <div><FaHashtag className={clsx([styles.icon, styles.iconNumber])} />{race.Results[0].Driver.permanentNumber}</div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Standings

export const getStaticPaths: GetStaticPaths = async () => {
  const yearRange = range(moment().year(), 2004, -1)
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
    /**
     * Race results of selected year.
     */
    const races: RaceResult[] = await fetch(`https://ergast.com/api/f1/${params?.year}/results/1.json`)
      .then(res => res.json())
      .then(result => result.MRData.RaceTable.Races);
    /**
     * We are getting world champion of selected year.
     */
    const standings: DriverStandings = await fetch(`https://ergast.com/api/f1/${params?.year}/driverStandings/1.json`)
      .then(res => res.json())
      .then(result => result.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { races, standings } }
  } catch (err:any) {
    return { props: { errors: err.message } }
  }
}