import React from 'react';
import s from './Principe.module.css'
import principeimg from '../../assets/principe/principeimg.png'

const Principe = () => {
    return (
        <section className={s.principe}>
            <div className={s.container}>
                <div className={s.principe_info}>
                    <h2>Принцип работы рекуператора</h2>
                    <div className={s.text}>
                        <p>Рекуператоры Prana: <br />
                            Комфортный климат в вашем доме или квартире и здоровье вашей семьи.
                        </p>
                        <p>
                            Рекуператоры Prana: <br />
                            Энергосберегающая система вентиляции, которая удаляет из помещения воздух, загрязнённый микрочастицами пыли и дыма, обеспечивает постоянный приток свежего воздуха и нормализует уровень влажности в помещении.
                        </p>
                        <p>
                            Рекуператоры Prana: <br />
                            Позволяют снизить затраты на обогрев жилья зимой и охлаждения летом благодаря эффективному медному теплообменнику.
                        </p>
                    </div>
                </div>
                <div className={s.principe_video}>
                    <div className={s.video_div}>
                        <iframe src="https://www.youtube.com/embed/1sOvRFA0vZ8" title="Купить рекуператор Прана в Бишкеке ОсОО &quot;ЭнКоБ&quot;" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className={s.principe_img}>
                        <img src={principeimg} alt="Принцип работы рекуператора" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Principe;