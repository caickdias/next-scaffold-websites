import Image from 'next/image'
import styles from './page.module.css'

import './globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="text-red-500">
        <h1>Next 13.0.4 and tailwind installed</h1>
      </div>
    </main>
  )
}
