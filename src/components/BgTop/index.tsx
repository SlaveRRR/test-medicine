
import React, { FC } from 'react'
import topBg from '@/assets/top-bg.svg'
import Image from 'next/image';
import styles from './index.module.scss'


const BgTop : FC = () => {
  return (
    <section className={styles['bg-top']}>
        <Image className={styles['bg']} src={topBg} alt='background top' />
    </section>
  )
}

export default React.memo(BgTop)