import React, { useContext } from 'react';
import s from './Footer.module.css'
import { Context } from '../../Context';

const Footer = () => {
    const { name, setName, phone, setPhone, postForm } = useContext(Context)
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.box}>
                    <p>
                        <span className={s.oneSpan}>Адрес</span>
                        <span><a className={s.twoSpan} >Горького 19, 1 этаж</a></span>
                    </p>
                    <p>
                        <span className={s.oneSpan}>Телефон</span>
                        <span><a className={s.twoSpan} href="tel:+996501605883">+996 555 58 34 36</a></span>
                    </p>
                    <p>
                        <span className={s.oneSpan}>E-mail</span>
                        <span><a className={s.twoSpan} href="mailto:itrefcode@gmail.com">barkov_v@bk.ru</a></span>
                    </p>
                </div>
                <div className={s.form}>
                    <h3>Получите консультацию</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setName('')
                        setPhone('')
                        postForm()
                    }}>
                        <input className={s.inp} required type="text" placeholder='Имя' value={name} onChange={e => setName(e.target.value)} />
                        <input className={s.inp} required type="text" placeholder='Номер' value={phone} onChange={e => setPhone(e.target.value)}
                            onKeyPress={(e) => {
                                if (!/^[0-9()-+.,\s-]+$/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <div className={s.text}>
                <p style={{ display: window.screen.width < 992 ? 'none' : 'block' }}>© 2023 Recuperator.kg</p>
            </div>
        </footer >
    );
};

export default Footer;