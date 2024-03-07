
import React, { FC, ReactElement } from 'react'
import styles from './index.module.scss';

type Props = {
    text:ReactElement<any,any>
}

const InfoCard : FC<Props> = ({text}) => {
  return (
    <div className={styles['infoCard']}>
        <p className={styles['infoCard__text']}>{text}</p>
    </div>
  )
}

export default InfoCard