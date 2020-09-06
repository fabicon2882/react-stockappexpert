//import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchStock } from '../hooks/useFetchStock'
import { StockGridItem } from './StockGridItem';
//import { getTicker } from '../helpers/getStock';

export const StockGrid = ({ stock }) => {


    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchStock(stock);

    /*useEffect(() => { 
        getTicker( stock )
            .then(inf => setImages( inf ));
    }, [ stock ])*/

    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ stock }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

           {/*  { loading ? 'Cargando...': 'Data Cargada'}*/}

            <div className="card-grid">
                {
                    images.map( img => (
                        <StockGridItem
                            key={ img.id } 
                            { ...img } 
                        />
                    ))
                }
            </div> 
        </>
    )
}
