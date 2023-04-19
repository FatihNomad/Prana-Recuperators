import React from 'react';
import style from './cards.module.css'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const Cards = ({ name, text, image1, image2, list1, list2, list3, id }) => {
    return (
        <LightGallery
            selector='.gallery_item'
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <div className={style.wrapper} id={id}>
                <h2 className={style.title}>{name}</h2>
                <div className={style.box}>
                    <div style={{ display: image1 ? 'block' : 'none' }} className={style.boxImg}>  <a data-src={image1} className='gallery_item' href={image1}><img src={image1} alt={name} /></a></div>
                    <div style={{ display: image2 ? 'block' : 'none' }} className={style.boxImg}><a data-src={image2} className={`${image2 ? 'gallery_item' : 'none'}`} href={image2}><img src={image2} alt={name} /></a></div>
                    <div className={style.boxText}>
                        <p className={style.text}>{text}</p>
                        <p style={{ display: list1 ? 'block' : 'none' }} className={style.list}>{list1}</p>
                        <p style={{ display: list2 ? 'block' : 'none' }} className={style.list}>{list2}</p>
                        <p style={{ display: list3 ? 'block' : 'none' }} className={style.list}>{list3}</p>
                        <p className={style.connect}>В связи с тем, что наш сайт на стадии доработки за стоимостью и подробной информации о товаре, просим связываться по телефону <a href="tel:+996 (555) 583-436">+996 (555) 583-436</a> или почте  <a href="mailto:barkov_v@bk.ru">barkov_v@bk.ru</a></p>
                    </div>
                </div>
            </div>
        </LightGallery>

    );
};

export default Cards;