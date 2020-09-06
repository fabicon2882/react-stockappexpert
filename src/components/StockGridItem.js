import React from 'react'

export const StockGridItem = ( {id, title, url_img} ) => {

    console.log(id, title, url_img);
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url_img} alt={ title }/>
            <p> { title } </p>
        </div>
    )
}
