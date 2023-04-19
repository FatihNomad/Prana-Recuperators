import React from 'react';
import s from './CardCatalog.module.css'
const CardCatalog = ({ img, text, name }) => {
    return (
        <div className={s.card}>
            <div className={s.cardContainer}>
                <div className={s.card_img}>
                    <img src={img} alt={name} />
                </div>
                <h4>{name}</h4>
                <div className={s.card_info}>
                    {
                        text?.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CardCatalog;