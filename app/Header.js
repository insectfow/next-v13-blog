'use client'

import HeaderLogo from '../public/favicon.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}>
        <Link href='/' className={styles.headerLogoLink}>
          <Image src={HeaderLogo} width={60} height={60} alt="header logo" />
        </Link>
      </h1>
      <ul className={styles.headerNav}>
        <li>
         <Link href='/profile'>Profile</Link> 
        </li>
      </ul>
    </header>
  )
}