import React from 'react';
import Cards from './Cards';
import data from './data';

function CardList({ filter }) {
    const filteredData = filter === 'ALL' ? data : data.filter(item => item.class === filter);

    const cards = filteredData.map(item => (
        <Cards key={item.id} item={item} />
    ));

    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
        </div>
    );
}

export default CardList;
