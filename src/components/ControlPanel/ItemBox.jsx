import React from 'react';
import {mmToIn, mmToCm} from '../../core/utils';
import './itemBox.css';
import { toogle } from '../../components/Header/Header';

function animate(id) {
    const block = document.getElementById('content-overlay' + id);
    // console.log(block.style.top = 0);
    block.classList.add('animate');
    // block.style.top = 0;
    // 'content-overlay' + id.classList.remove('animate2');
}

function getId(id) {
    return 'content-overlay' + id;
}

export const ItemBox = (props) => {
    const productIsWiderThanLarger = props.item.itemBoxThumb.width > props.item.itemBoxThumb.height;
    const thumbStyle = {
        width: productIsWiderThanLarger ? '7em' : 'auto',
        height:  productIsWiderThanLarger ? 'auto' : '7em'
    }
    return (
        <li>
            <a className={props.isActive ? 'item-box item-box--active' : 'item-box'}
               onMouseOver={
                   () => { props.onHovered; animate(props.item.id);}
               }>
                <div className="item-box__content">
                    <div className="item-box__content__title">
                        <span className="item-box__title">{props.item.name.substring(0, 32)}{props.item.name.length > 32 && '...'}</span>
                    </div>
                    <div className="item-box__content__thumb">
                        <img src={props.item.itemBoxThumb.url} style={thumbStyle} alt="" />
                    </div>
                </div>
                <div className="item-box__content-overlay" id={getId(props.item.id)}>
                    <div className="content-overlay__title">
                        <span className="item-box__title">
                            {props.item.itemBoxThumb.width && <span>W: {toogle ? mmToIn(props.item.itemBoxThumb.width) + ' in' : mmToCm(props.item.itemBoxThumb.width) + ' sm'}</span> }&nbsp;
                            {props.item.itemBoxThumb.height && <span>W: {toogle ? mmToIn(props.item.itemBoxThumb.height) + ' in' : mmToCm(props.item.itemBoxThumb.height) + ' sm'}</span> }&nbsp;
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
};