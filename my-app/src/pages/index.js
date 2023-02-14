import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FullSpeed Inc</title>
        <meta name="description" content="FullSpeed Inc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.logo}>FullSpeed</h1>
        </div>
        <div className={styles.info}>
          {/* <p>More info:</p> */}
            <ul className={styles.ul}>
              <li>
              <Link href="https://twitter.com/nyashaspeed69">
                Twitter
              </Link>
              </li>
              <li>
              <Link href="https://www.instagram.com/nyashaspeed69/">
                Instagram
              </Link>
              </li>
              {/* // link for substack */}
              <li>
              <Link href="https://substack.com/profile/12161427-nyashaspeed69">
                Substack
              </Link>
              </li>
            </ul>
        </div>
      </div>
        <footer className={styles.footer}>
            <p>© 2023. All rights reserved.</p>
          </footer>
    </div>
  )
}
