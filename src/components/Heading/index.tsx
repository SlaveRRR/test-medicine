
import React,{FC} from 'react'
import styles from './index.module.scss'
type Props = {
    text:string;
}

const Heading : FC<Props> = ({text}) => {
  return (
    <p className={styles['heading']}>
        {text}
    </p>
  )
}

export default Heading