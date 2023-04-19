import React, { useState } from 'react';
import style from './BurgerMenu.module.css'
import CardLinks from '../../TopMain/CardLink/CardLinks';
import phone from '../../../assets/Header/phone.png'
import email from '../../../assets/Header/email.png'

const BurgerMenu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    const changeState = () => {
        setBurgerActive(!burgerActive)
    }
    return (
        <div className={style.burger_menu} onClick={changeState}>
            <div className={burgerActive ? style.menu_btn_active : style.menu_btn}>
                <span></span>
            </div>
            <div className={burgerActive ? style.menu_active : style.menu}>
                <ul >
                    <li onClick={changeState}>   <CardLinks text={'Электрические котлы'} to={'electric'} changeState={changeState} /></li>
                    <li >
                        <CardLinks text={'Газовые котлы'} to={'gas'} changeState={changeState} /></li>
                    <li >
                        <CardLinks text={'Теплообменники и емкости ГВС'} to={'heat'} changeState={changeState} /></li>
                    <li > <CardLinks text={'Тепловые насосы'} to={'pump'} changeState={changeState} /></li>
                    <li >
                        <CardLinks text={'Внутрипольный  конвектор'} to={'convector'} changeState={changeState} /></li>
                    <li> <CardLinks text={'Рекуператоры'} to={'recuperators'} changeState={changeState} /></li>
                    <li>  <CardLinks text={'Настенный конвектор'} to={'convector2'} changeState={changeState} /></li>
                    <li>  <CardLinks text={'Радиатор REGULUS настенный  ДЕКОР'} to={'radiator'} changeState={changeState} /></li>
                </ul>
                <div className={style.contacts}>
                    <div className={style.phone}>
                        <div id={style.phone_img}>
                            <img src={phone} alt="phone_img" />
                        </div>
                        <div id={style.contacts}>
                            <p>Контакты</p>
                            <a href={`tel:+996555583436`}>+996 555 58 34 36</a>
                        </div>
                    </div>
                    <div className={style.email}>
                        <div id={style.email_img}>
                            <img src={email} alt="email_img" />
                        </div>
                        <div id={style.email_p}>
                            <p>E-mail</p>
                            <a href={`mailto:barkov_v@bk.ru`}>barkov_v@bk.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BurgerMenu;
