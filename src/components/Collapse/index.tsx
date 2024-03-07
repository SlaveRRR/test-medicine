'use client';
import React, { ElementType, FC, ReactElement, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
type Props = {
  icon: string;
  labelText: ReactElement<any, any>;
  textPreview: string;
  openIcon: string;
  fullText: ReactElement<any, any>;
  children: React.ReactNode;
};

const Collapse: FC<Props> = ({ icon, labelText, textPreview, openIcon, fullText, children }) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div className={styles['collapse']}>
      {collapse ? (
        <>
          <Image src={icon} className={styles['collapse__icon-label']} alt="icon label" />
          <div className={styles['label-container']}>
            <svg
              className={styles['label-container__label']}
              width="297"
              height="116"
              viewBox="0 0 297 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M254.139 115.5H0V1H254.139L295 50.8145L254.139 115.5Z" fill="url(#paint0_linear_0_5998)" />
              <path d="M0 114.5H254.139L295 50.5L254.139 1" stroke="url(#paint1_linear_0_5998)" stroke-width="3" />
              <defs>
                <linearGradient
                  id="paint0_linear_0_5998"
                  x1="295"
                  y1="50.7293"
                  x2="2.95041e-07"
                  y2="50.7293"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D8EFFF" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_5998"
                  x1="295"
                  y1="1.00001"
                  x2="-10.2769"
                  y2="66.874"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#01457A" />
                  <stop offset="0.432292" stop-color="#43A7C7" />
                  <stop offset="0.744792" stop-color="#BCD77E" />
                  <stop offset="1" stop-color="#BCD77E" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p className={styles['label-container__label-text']}>{labelText}</p>
          </div>
          <div className={styles['collapse__text-container']}>
            <p className={styles['collapse__text']}>{textPreview}</p>
          </div>
        </>
      ) : (
        <>
          <p>{fullText}</p>
          {children}
        </>
      )}
      <button onClick={() => setCollapse((prev) => !prev)} className={styles['collapse__btn']}>
        <Image className={styles['collapse__openIcon']} src={openIcon} alt="open icon" />
      </button>
    </div>
  );
};

export default Collapse;
