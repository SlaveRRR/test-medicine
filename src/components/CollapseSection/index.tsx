import React from 'react';
import Collapse from '../Collapse';
import manIcon from '@/assets/man.svg';
import earthIcon from '@/assets/earth.svg';
import Heading from '../Heading';
import Diagram from '@/assets/diagram.svg';
import Image from 'next/image';

type Props = {};

const CollapseSection = (props: Props) => {
  return (
    <section className="collapse-section">
      <div className="container">
        <Heading text="ХОБЛ: мифы и реальность" />
        <Collapse
          icon={manIcon}
          labelText={
            <>
              ХОБЛ болеют <b>преимущественно мужчины?</b>
            </>
          }
          textPreview="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание..."
          fullText={
            <>
              <p style={{
                marginBottom:'9px'
              }} className='text'>
                В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ,
                диагностированной до 55 лет, было выявлено <b>преобладание женщин (66%),</b> а в возрасте 60-64 лет количество
                женщин и мужчин.
              </p>
              <p className='text'>
                Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные
                пути курящих женщин имеют более <b>высокий процент площади стенок,</b> но меньшую площадь просвета, внутренний
                диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
              </p>
            </>
          }
        >
          <Image className="diagram" src={Diagram} alt="diamgram" />
        </Collapse>
        <Collapse
          icon={earthIcon}
          labelText={
            <>
              <b>Опасно</b> не наличие заболевания, а обострения?
            </>
          }
          textPreview="Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение..."
          fullText={
            <>
              <p className='text'>
              <b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup className='sup'>1</sup>.</b>
              </p>
              <p className='text'>
              В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup className='sup'>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.
              </p>
            </>
          }
        >
            <p>sfs</p>
        </Collapse>
      </div>
    </section>
  );
};

export default CollapseSection;
