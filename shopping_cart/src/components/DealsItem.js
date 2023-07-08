
import React from 'react'

const DealsItem =props =>{
    const item = props.dealsItem
    return(
        <div className='item'>
            <img src={item.image_url} alt={`${item.image_description}`}/>
            <h1 className='name'>{item.title}</h1>
            <p className='price'>{item.label}</p>
          {  /*<button onClick={() =>
          props.addItem(props.product)}>Add to Cart</button>*/}
        </div>)
}

export default DealsItem