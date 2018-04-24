import React from 'react';
import './header.css';

export let toogle = localStorage.getItem('switcherControl') === 'true' ? true : false;

export const Header = (props) => (
    <div className="header">
        <div className="header__toogle">
            <span className="header__toogle__title">CM/IN</span>
            <label className="header__switch">
                <input id="switcher-control" className="header__checkbox" type="checkbox" onChange={
                    () => {
                        const switcherControl = document.getElementById('switcher-control');
                        localStorage.setItem('switcherControl', switcherControl.checked);
                        toogle = switcherControl.checked;
                    }
                } defaultChecked={toogle}
                />
                <span className="header__slider header__round"></span>
            </label>
        </div>
        <div className="header__left">
            <h1 className="header__title">{props.productName}</h1>
            {
                props.mode !== 'view-in-context' &&
                <h2 className="header__subtitle">compared to {props.currentItems[0].name}</h2>
            }
        </div>
        <div className="header__right">
        </div>
    </div>
);