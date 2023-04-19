import React from 'react';
import s from './Benefits.module.css'
import technology from '../../assets/Benefits/technology.png'
import save from '../../assets/Benefits/save.png'
import simple from '../../assets/Benefits/simple.png'
import energy from '../../assets/Benefits/energy.png'
import CardBenefit from './CardBenefit/CardBenefit';


const Benefits = () => {
    return (
        <section className={s.enefits}>
            <div className={s.container}>
                <h2>Очевидные Выгоды Рекуператора?</h2>
                <div className={s.benefits_main_div}>
                    <div className={s.benefit_column1}>
                        <CardBenefit img={technology} name={'1. Технология микроклимата'} text={'Инновационная разработка в отрасли вентиляции, кондиционирования и отопления для домов, квартир и промышленных объектов.'} />
                        <CardBenefit img={energy} name={'2. Энергия природы'} text={'Фильтрация, ионизация, дезинфекция, обеззараживание и наполнение помещения воздухом с сохранением природной энергетической составляющей "прана".'} />
                    </div>

                    <div className={s.benefit_column2}>
                        <CardBenefit img={simple} name={'3. Простота монтажа'} text={'Монтаж рекуператора воздуха PRANA нашими специалистами занимает 2 часа, не повреждая при этом ремонт.'} />
                        <CardBenefit img={save} name={'4. Prana сохраняет прохладу и тепло'} text={'Энергосберегающая система вентиляции, которая удаляет из помещения воздух загрязнённый микрочастицами пыли и дыма, обеспечивавая постоянный приток живого воздуха .'} />


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;