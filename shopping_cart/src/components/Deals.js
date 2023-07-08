import React from 'react'
import DealsItem from './DealsItem'

const Deals = props =>{
    console.log("Deals page loading")
    const deals = props.deals

    return deals.length > 1 ? <div className="products-container">
        {deals.map(deal => (
            <DealsItem
                key={deal.id}
                deal={deal}
                 />
        ))}
    </div> : <div className='products-containter'>Loading...</div>;
}

    export default Deals
