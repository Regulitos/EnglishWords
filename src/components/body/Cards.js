import React from 'react'
import './card.css'

export default function Cards(props) {
    return (
        <div className='card2'>
            <div>
                <h5>{props.items.word}</h5>
                <div className='container'>
                    <p>{props.items.description}</p>
                </div>
            </div>
        </div>
    )
}
