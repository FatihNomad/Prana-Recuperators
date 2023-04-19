import React from 'react';
import s from './CardBenefit.module.css'

const CardBenefit = ({ img, text, name }) => {
    return (
        <div className={s.card}>
            <div className={s.card_img}>
                <img src={img} alt={name} />
            </div>
            <div className={s.card_info}>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default CardBenefit;