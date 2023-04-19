import React from 'react';
import s from './Catalog.module.css'
import CardCatalog from './CardCatalog/CardCatalog';
import recuperator1 from '../../assets/Catalog1/recuperator1.png'
import recuperator2 from '../../assets/Catalog1/recuperator2.png'
import recuperator3 from '../../assets/Catalog1/recuperator3.png'
import recuperator4 from '../../assets/Catalog1/recuperator4.png'
import recuperator5 from '../../assets/Catalog1/recuperator5.png'
import { Link } from 'react-scroll';



const Catalog = () => {
    return (
        <section>
            <div className={s.container}>
                <h2>Модельный ряд рекуператоров в наличии и на заказ:</h2>
                <div className={s.recuperators}>
                    <h3>Промышленные рекуператоры</h3>
                    <div className={s.cardCatalog}>
                        <CardCatalog img={recuperator1} name={"Рекуператор Prana-150"} text={['Торговая марка: Prana.', 'Производство: Украина.', 'Управление:дистанционное.', 'Приток: 650 м3/час. Вытяжка 610 м3/час.', 'КПД: 74%.', 'Потребляемая мощность: min 20 Вт, max 120 Вт.', 'Напряжение: 220В.', 'Габаритные размеры: D=250 мм, L= от 610 мм.', 'Форма: цилиндрическая. Гарантия: 2 года.']} />
                        <CardCatalog img={recuperator2} name={"Рекуператор prana-340s"} text={['Торговая марка: Prana.', 'Производство: Украина.', 'Управление: диммер.', 'Приток: 1100 м3/час. Вытяжка 1020 м3/час.', 'КПД: 78%.', 'Потребляемая мощность: min 80 Вт, max 310 Вт.', 'Напряжение: 220В.', 'Габаритные размеры: D=340 мм.', 'Форма: цилиндрическая. Гарантия: 2 года.']} />
                        <CardCatalog img={recuperator3} name={"Рекуператор prana-340s+"} text={['Торговая марка: Prana.', 'Производство: Украина.', 'Управление: диммер.', 'Приток: 1600 м3/час. Вытяжка 1520 м3/час.', 'КПД: 78%.', 'Потребляемая мощность: min 80 Вт, max 310 Вт.', 'Напряжение: 220В.', 'Габаритные размеры: D=340 мм.', 'Форма: цилиндрическая. Гарантия: 2 года.']} />
                    </div>
                    <div className={s.catalog_btn}>
                        <Link to='header'
                            smooth={true}>
                            <button>Получить консультацию специалиста</button>
                        </Link>
                    </div>
                    <h3>Бытовые рекуператоры для дома и квартиры</h3>
                    <div className={s.cardCatalog2}>
                        <CardCatalog img={recuperator4} name={"Рекуператор Prana-150"} text={['Торговая марка: Prana.', 'Производство: Украина.', 'Управление:дистанционное.', 'Приток: 115 м³/час. Вытяжка: 105 м³/час.', 'КПД: 90%.', 'Потребляемая мощность: min 6 Вт, max 32 Вт.', 'Напряжение: 220В.', 'Габаритные размеры: D=150 мм, L= от 475 мм.', 'Форма: цилиндрическая. Гарантия: 2 года.', , 'Площадь помещения: до 120 м².']} />
                        <CardCatalog img={recuperator5} name={"Рекуператор prana-200c"} text={['Торговая марка: Prana.', 'Производство: Украина.', 'Управление:дистанционное.', 'Приток: 235 м³/час. Вытяжка: 220 м³/час.', 'КПД: 81%.', 'Потребляемая мощность: min 12 Вт, max 54 Вт.', 'Напряжение: 220В.', 'Габаритные размеры: D=200 мм, L= от 500 мм.', 'Форма: цилиндрическая. Гарантия: 2 года.', 'Площадь помещения: до 120 м².']} />

                    </div>
                    <div className={s.catalog_btn}>
                        <Link to='header'
                            smooth={true}>
                            <button>Получить консультацию специалиста</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;