
import React, { FC } from 'react'
import { IDiseaseCard } from './type'
import styles from './index.module.scss'
import Image from 'next/image'


type Props = {
    card:IDiseaseCard
}

const DiseaseCard : FC<Props> = ({card : {head,icon,percent,text}}) => {
  return (
    <div className={styles['card']}>
        <Image className={styles['card__icon']} src={icon} alt='desease icon'/>
        <h3 className={styles['card__percent']}>{percent}</h3>
        {head}
        <p className='text-small'>{text}</p>
    </div>
  )
}

export default DiseaseCard