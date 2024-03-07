'use client';
import React, { ElementType, FC, ReactElement, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Image from 'next/image';
type Props = {
  icon: string;
  labelText: ReactElement<any, any>;
  textPreview: string;
  fullText: ReactElement<any, any>;
  children: React.ReactNode;
};

const Collapse: FC<Props> = ({ icon, labelText, textPreview, fullText, children }) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div
      className={cn(styles['collapse'], {
        [styles['collapse--active']]: !collapse,
      })}
    >
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
          {fullText}
          {children}
        </>
      )}
      <button onClick={() => setCollapse((prev) => !prev)} className={styles['collapse__btn']}>
        <svg className={styles['collapse__openIcon']}  width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24.1293" cy="24.1293" r="24.1293" fill={collapse ? "#01457A" : "#BCD77E"} />
          <path
            d="M32.7208 20.9402C32.3807 20.9444 32.0444 21.0015 31.7285 21.1086C31.6376 20.6071 31.3276 20.153 30.8601 19.8365C30.3926 19.52 29.8018 19.3643 29.2051 19.4004C28.6085 19.4364 28.0498 19.6616 27.64 20.0311C27.442 19.691 27.1371 19.404 26.7587 19.2019C26.3803 18.9999 25.9435 18.8906 25.4964 18.8862C24.9791 18.8757 24.4738 19.0186 24.0674 19.2903V12.7915C23.9662 12.1255 23.4878 11.5435 22.7858 11.233C22.0841 10.9223 21.2475 10.9223 20.5458 11.233C19.8438 11.5435 19.3654 12.1255 19.2642 12.7915V25.0147L17.3986 22.8259C16.9177 22.2879 16.2056 21.9328 15.4173 21.8382C14.6292 21.7436 13.829 21.9171 13.1909 22.3209C12.4362 22.7942 11.9937 23.545 12.0001 24.3412C12.0017 24.8821 12.1953 25.4101 12.5558 25.8565L18.907 33.1297C19.6119 33.9276 20.2613 34.7595 20.852 35.6215C21.9238 37.1368 22.3605 37.7092 24.7818 37.7092H30.3391C32.443 37.7092 32.8001 36.3623 33.0385 35.3521C33.2766 34.3419 33.2766 34.3083 33.6339 34.0052C35.0629 32.7256 35.1025 30.5706 35.1025 29.5604V22.9606C35.1025 22.4248 34.8516 21.911 34.405 21.532C33.9583 21.1531 33.3526 20.9402 32.7208 20.9402Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Collapse;
