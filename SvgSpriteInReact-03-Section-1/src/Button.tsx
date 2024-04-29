import React from 'react';
// import icon from './images/light-ceiling.svg';
import sprite from '../src/images/sprite.svg';
import s from './Button.module.css';

type ButtonPropsType = {
    style: {
        backgroundColor?: string
    },
    iconId: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button className={s.btn} style={props.style}>
                {/*<img src={icon} alt = "icon"/>*/}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#${props.iconId}`}/>
                </svg>

            </button>
        </div>
    );
};
