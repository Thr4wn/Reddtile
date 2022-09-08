import React from 'react';
import './ImageFull.css';


export const ImageFull = ({ image, toggleImage }) => {
    return (
        <div className="wrapper">
            <div className="background" onClick={toggleImage}>
                <img src={image} id='fullImage' />
            </div>
        </div>
    )
};