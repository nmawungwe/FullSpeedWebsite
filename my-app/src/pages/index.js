import React, { useEffect } from 'react';
import  Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {

  const [date, setDate] = useState("");

  
  // a function to get the current date on page load
  useEffect(() => {
    getDate();
  },
  []);

  const getDate = () => {
    const today = new Date();
    // const dd = String(today.getDate()).padStart(2, '0');
    // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    setDate(yyyy);
  }

    

  return (
    <div>
      <Head>
        <title>FullSpeed Inc</title>
        <meta name="description" content="FullSpeed Inc" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
                <Link  href="https://twitter.com/nyashaspeed69">
                  <span>Twitter </span>
                  <i className="fa fa-twitter"></i> 
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/nyashaspeed69/">
                  <span>Instagram </span>
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://substack.com/profile/12161427-nyashaspeed69">
                  <span>Substack </span>
                  <i className="fa fa-envelope"></i>
                </Link>
              </li>   
            </ul>
        </div>
      </div>
        <footer className={styles.footer}>
            <p>© {date}. All rights reserved.</p>
          </footer>
    </div>
  )
}
