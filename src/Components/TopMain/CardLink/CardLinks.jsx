import React from 'react';
import { Link } from 'react-scroll';
import s from './CardLink.module.css'

const CardLinks = ({ text, to, changeState }) => {
    return (
        <Link
            to={to} className={s.link} smooth={true}
            onClick={changeState}
        >{text}
            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.32394 1.39999L7.73239 8.95999L1.32394 16.52" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    );
};

export default CardLinks;