import React from 'react';
import style from './Assembling.module.css'
import img1 from './../../assets/Assembling/Frame 1.png'
import img2 from './../../assets/Assembling/Frame2.png'
import img3 from './../../assets/Assembling/Frame 3.png'
import { Link } from 'react-scroll';


const Assembling = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.header_text}>
                    <h2>Монтаж рекуператора в три шага</h2>
                </div>
                <div className={style.box}>
                    <div className={style.boxText}>
                        <h2>1. Выбор модели рекуператора и места монтажа</h2>
                        <p>Сначала необходимо выбрать модель рекуператора и место его монтажа.Если у вас стоящияся дом или квартира. Необходимо подвести к месту расположения электрический кабель 3х1 мм/кввадратный.Если вы уже живете в доме или кварите, то необходимо выбрать место для монтажа поближе к электрической проводке.</p>
                    </div>
                    <div className={style.BoxImg}>
                        <img src={img1} alt="img" />
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.BoxImg}>
                        <img src={img2} alt="img" />
                    </div>
                    <div className={style.boxText}>
                        <h2>2. Сверление отверстия для рекуператора</h2>
                        <p>С помощью алмазного сверления необходимо вырезать отверстие по диаметру рекуператора в стене смежной с улицей на расстоянии 100-150 мм от потолка, под уклоном 3-5 градусов в сторону улицы.</p>
                    </div>

                </div>
                <div className={style.box}>
                    <div className={style.boxText}>
                        <h2>3. Смонтировать рекуператор</h2>
                        <p>Смонтировать рабочий модуль системы Прана и подключить к электросети. Первый запуск рекуператора Прана должен сделать подготовленый специалист.</p>
                    </div>
                    <div className={style.BoxImg}>
                        <img src={img3} alt="img" />
                    </div>
                </div>
                <div className={style.btn}>

                    <Link
                        to='header'
                        smooth={true}>
                        <button>Получить консультацию специалиста</button>

                    </Link>
                </div>

            </div>
            <div className={style.line}>
            </div>
        </>
    );
};

export default Assembling;