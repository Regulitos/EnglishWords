import React from 'react';
import './card.css';

export default function Cards(props) {
    const { item } = props;

    if (!item) {
        return null; // or you can return a placeholder or error message
    }
    const classUpperCase = item.class.toUpperCase();
    return (
        <div className={`card2 ${classUpperCase}`}>
            <div>
                <p>{item.id}</p>
                <h5>{item.word}</h5>
                <div className='container'>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}