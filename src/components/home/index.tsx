import React, { FC } from 'react';
import Heading from '../Heading';
import Collapse from '../Collapse';
import manIcon from '@/assets/man.svg';
import earthIcon from '@/assets/earth.svg';
import openIcon from '@/assets/openIcon.svg'
type Props = {};

const Home: FC = (props: Props) => {
  return (
    <>
    <section className='collapse-section'>
      <Heading text="ХОБЛ: мифы и реальность" />
      <Collapse
        icon={manIcon}
        labelText={<>ХОБЛ болеют <b>преимущественно мужчины?</b></>}
        textPreview="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание..."
        openIcon={openIcon}
        fullText={
            <>
            В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин.
Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более высокий процент площади стенок, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
            </>
        }
      />
      <Collapse
        icon={earthIcon}
        labelText={<><b>Опасно</b> не наличие заболевания, а обострения?</>}
        textPreview="Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение..."
        openIcon={openIcon}
        fullText={
            <>
            В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин.
Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более высокий процент площади стенок, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
            </>
        }
      />
    </section>
    <section className='cards-section'>
        <Heading text='Терапия ХОБЛ: что в фокусе?'/>
        <p className={styles['']}>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
    </section>
    </>
    
  );
};

export default Home;
