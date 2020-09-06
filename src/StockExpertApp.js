import React, { useState } from 'react';
import { AddStock } from './components/AddStock';
import { StockGrid } from './components/StockGrid';

const StockExpertApp = () => {

    const [stocks, setStocks] = useState(['NIO']);

    /* const handleAdd = () => {
        setStocks(['AMZN', ...stocks]);
        //setStocks(cons => [...stock, 'AMZN']);
    }
 */
    return (
        <>
            <h2>StockExpertApp</h2>
            <AddStock setStocks={ setStocks } />
            <hr/>

           {/* <button onClick={ handleAdd }>Add Stock</button> */}

            <ul>
                {
                    stocks.map( stock => (
                        <StockGrid
                            key={ stock } 
                            stock={ stock } 
                        />
                    ))
                }
            </ul>

        </>
    );
}


export default StockExpertApp;