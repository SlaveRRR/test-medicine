import React, { FC } from 'react'
import { ICard } from './type'
import Card from '../Card'
import styles from './index.module.scss'
type Props = {
    cards:ICard[]
}

const Cards : FC<Props> = ({cards}) => {
  return (
    <div className={styles['cards']}>
       { cards.map(({head,text},i) => <Card text={text} num={i+1} head={head} />)}
    </div>
    
  )
}

export default Cards