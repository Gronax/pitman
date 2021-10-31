import React from 'react'
import Head from 'next/head'
import { Props } from '../types/layout'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children, title = 'Pitman' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Pitman | Formula One stat app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans" />
    </Head>
    <Navbar />
    <div className={styles.layout}>
      {children}
    </div>
    <Navbar />
  </>
)

export default Layout
