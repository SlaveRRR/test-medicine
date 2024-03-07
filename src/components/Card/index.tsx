import React, { FC, ReactElement } from 'react';
import InhalerImage from '@/assets/inhaler.svg';
import styles from './index.module.scss';
import Image from 'next/image';
type Props = {
  num: number;
  head: ReactElement<any,any>;
  text: ReactElement<any,any>;
};

const Card: FC<Props> = ({ num, head, text }) => {
  return (
    <div className={styles['card']}>
      {/* <div className={styles["card__image-container"]}> */}
        <span data-num={num} className={styles['card__image']}></span>
      {/* <Image className={styles['card__image']} src={InhalerImage} alt="inhaler icon" /> */}
      {/* </div> */}
      
      <p className={styles['card__head']}>{head}</p>
      <p className={styles['card__text']}>{text}</p>
    </div>
  );
};

export default Card;
