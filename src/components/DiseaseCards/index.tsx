import React, { FC } from 'react'
import { IDiseaseCard } from '../DiseaseCard/type'
import DiseaseCard from '../DiseaseCard'
import styles from './index.module.scss'

type Props = {
    cards:IDiseaseCard[]
}

const DiseaseCards : FC<Props> = ({cards}) => {
  return (
    <div className={styles["cards"]}>
        {cards.map((card,i) => <DiseaseCard key={i} card={card}/>)}
    </div>
  )
}

export default DiseaseCards

