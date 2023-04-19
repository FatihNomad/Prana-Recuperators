import React, { useContext } from 'react';
import s from './TopMain.module.css'
import CardLinks from './CardLink/CardLinks';
import { Context } from '../../Context';
const TopMain = () => {
    const { name, setName, phone, setPhone, postForm } = useContext(Context)
    return (
        <section className={s.top_main}>
            <div className={s.container}>
                <div className={s.nav_and_form}>
                    <div className={s.nav}>
                        <div className={s.nav_links}>
                            <CardLinks text={'Электрические котлы'} to={'electric'} />
                            <CardLinks text={'Газовые котлы'} to={'gas'} />
                            <CardLinks text={'Теплообменники и емкости ГВС'} to={'heat'} />
                            <CardLinks text={'Тепловые насосы'} to={'pump'} />
                            <CardLinks text={'Внутрипольный  конвектор'} to={'convector'} />
                            <CardLinks text={'Настенный конвектор'} to={'convector2'} />
                            <CardLinks text={'Радиатор REGULUS настенный  ДЕКОР'} to={'radiator'} />
                            <CardLinks text={'Рекуператоры'} to={'recuperators'} />
                        </div>
                        <div className={s.name}>
                            <h1>РЕКУПЕРАТОРЫ ТЕПЛА PRANA- ЛУЧШЕЕ РЕШЕНИЕ ВАШЕЙ ПРОБЛЕМЫ !</h1>
                        </div>
                    </div>
                    <div className={s.form}>
                        <div className={s.container}>
                            <div className={s.form_text}>
                                <h3>Получите консультанцию</h3>
                                <p>Заполните форму и получите бесплатную консультацию от специалиста</p>
                            </div>
                            <form onSubmit={e => {
                                e.preventDefault()
                                setName('')
                                setPhone('')
                                postForm()
                            }}>
                                <input type="text" required placeholder='Имя' value={name} onChange={e => setName(e.target.value)} />
                                <input type="text" required placeholder='Номер' value={phone} onChange={e => setPhone(e.target.value)}
                                    minLength={9}
                                    onKeyPress={(e) => {
                                        if (!/^[0-9()-+.,\s-]+$/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }} />
                                <button>Отправить</button>
                            </form>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default TopMain;