import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/Header/logo.png'
import phone from '../../assets/Header/phone.png'
import email from '../../assets/Header/email.png'
import BurgerMenu from './BurgerMenu';
const Header = () => {
    return (
        <header className={s.header} id='header'>
            <div className={s.container}>

                <div className={s.logo}>
                    <img src={logo} alt="prana" />
                </div>
                <div className={s.info}>
                    <div className={s.phone}>
                        <div id={s.phone_img}>
                            <img src={phone} alt="phone_img" />
                        </div>
                        <div id={s.contacts}>
                            <p>Контакты</p>
                            <a href={`tel:+996555583436`}>+996 555 58 34 36</a>
                        </div>
                    </div>
                    <div className={s.email}>
                        <div id={s.email_img}>
                            <img src={email} alt="email_img" />
                        </div>
                        <div id={s.email_p}>
                            <p>E-mail</p>
                            <a href={`mailto:barkov_v@bk.ru`}>barkov_v@bk.ru</a>
                        </div>
                    </div>
                </div>
                <BurgerMenu />
            </div>

        </header>
    );
};

export default Header;