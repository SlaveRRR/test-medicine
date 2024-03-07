import React, { FC } from 'react'
import styles from './index.module.scss'

type Props = {
    text:string;
}

const Warning : FC<Props> = ({text}) => {
  return (
    <p className={styles['warning']}>{text}</p>
  )
}

export default Warning